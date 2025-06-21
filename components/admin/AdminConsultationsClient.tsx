'use client';

import { useState } from 'react';
import { ConsultationBooking, ConsultationStatus } from '@/lib/supabase';
import ConsultationTable from '@/components/admin/ConsultationTable';
import { Button } from '@/components/ui/button';
import { RefreshCw, Clock, MailCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

interface AdminConsultationsProps {
  initialConsultations: ConsultationBooking[];
  refreshConsultations: () => Promise<{
    success: boolean;
    data?: ConsultationBooking[];
    error?: string;
  }>;
}

export default function AdminConsultationsClient({
  initialConsultations,
  refreshConsultations,
}: AdminConsultationsProps) {
  const [consultations, setConsultations] = useState<ConsultationBooking[]>(initialConsultations);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Calculate consultation counts by status
  const statusCounts = {
    pending: consultations.filter(c => c.status === 'pending').length,
    contacted: consultations.filter(c => c.status === 'contacted').length,
    processing: consultations.filter(c => c.status === 'processing').length,
    finished: consultations.filter(c => c.status === 'finished').length,
  };

  // Status config for consistent styling
  const statusConfig = {
    pending: {
      bgColor: 'bg-yellow-500',
      textColor: 'text-yellow-600',
      borderColor: 'border-yellow-200',
      icon: Clock,
      label: 'Pending',
    },
    contacted: {
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      icon: MailCheck,
      label: 'Contacted',
    },
    processing: {
      bgColor: 'bg-purple-500',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      icon: AlertCircle,
      label: 'Processing',
    },
    finished: {
      bgColor: 'bg-green-500',
      textColor: 'text-green-600',
      borderColor: 'border-green-200',
      icon: CheckCircle2,
      label: 'Finished',
    },
  };

  // Function to refresh consultations data
  const handleRefresh = async () => {
    try {
      setRefreshing(true);
      const result = await refreshConsultations();

      if (result.success && result.data) {
        setConsultations(result.data);
        // Log all consultation data to console
        console.log('All consultation data:', result.data);
      } else {
        setError(result.error || 'Failed to fetch consultations');
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error('Error fetching consultations:', err);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard: Consultations</h1>
        <Button onClick={handleRefresh} disabled={refreshing} className="flex items-center gap-2">
          <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
          Refresh Data
        </Button>
      </div>

      {/* Total count summary */}
      <div className="mb-4">
        <p className="text-lg font-medium">
          Total Consultations:{' '}
          <span className="text-blue-600 font-bold">{consultations.length}</span>
        </p>
      </div>

      {/* Status Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {Object.entries(statusConfig).map(([status, config]) => {
          const count = statusCounts[status as keyof typeof statusCounts];
          const Icon = config.icon;

          return (
            <div
              key={status}
              className={`p-4 rounded-lg border ${config.borderColor} bg-white shadow-sm flex items-center justify-between`}
            >
              <div>
                <p className="text-gray-500 text-sm">{config.label}</p>
                <p className={`text-2xl font-bold ${config.textColor}`}>{count}</p>
              </div>
              <div className={`p-3 rounded-full ${config.bgColor} bg-opacity-10`}>
                <Icon className={`w-5 h-5 ${config.textColor}`} />
              </div>
            </div>
          );
        })}
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
      )}

      <div className="mb-6">
        <div className="flex justify-between items-center">
          <p className="text-blue-600">
            {consultations.length} consultation{consultations.length !== 1 ? 's' : ''} found
          </p>
          <Button
            onClick={() => console.log('All consultations:', consultations)}
            variant="outline"
          >
            Log Data to Console
          </Button>
        </div>
      </div>

      <ConsultationTable consultations={consultations} onRefresh={handleRefresh} />
    </div>
  );
}
