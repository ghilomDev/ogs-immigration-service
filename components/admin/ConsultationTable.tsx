'use client';

import { useState } from 'react';
import { ConsultationBooking } from '@/lib/supabase';
import { updateConsultationStatus } from '@/app/actions/consultation';
import { AlertCircle, CheckCircle2, ChevronDown, Clock, MailCheck, Phone } from 'lucide-react';

type StatusOption = 'pending' | 'contacted' | 'processing' | 'finished';

interface ConsultationTableProps {
  consultations: ConsultationBooking[];
  onRefresh: () => void;
}

export default function ConsultationTable({ consultations, onRefresh }: ConsultationTableProps) {
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [updateError, setUpdateError] = useState<string | null>(null);

  // Define available status options
  const statusOptions: StatusOption[] = ['pending', 'contacted', 'processing', 'finished'];

  // Status colors and icons mapping
  const statusConfig = {
    pending: {
      bgColor: 'bg-yellow-500',
      icon: Clock,
      label: 'Pending',
    },
    contacted: {
      bgColor: 'bg-blue-500',
      icon: MailCheck,
      label: 'Contacted',
    },
    processing: {
      bgColor: 'bg-purple-500',
      icon: AlertCircle,
      label: 'Processing',
    },
    finished: {
      bgColor: 'bg-green-500',
      icon: CheckCircle2,
      label: 'Finished',
    },
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      setUpdatingId(id);
      setUpdateError(null);

      const result = await updateConsultationStatus(id, newStatus);

      if (result.success) {
        // Refresh the consultation list
        onRefresh();
      } else {
        setUpdateError(result.error || 'Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      setUpdateError('An unexpected error occurred');
    } finally {
      setUpdatingId(null);
    }
  };

  if (consultations.length === 0) {
    return (
      <div className="text-center py-10 bg-gray-50 rounded-md">
        <p className="text-gray-500">No consultations found</p>
      </div>
    );
  }

  return (
    <div>
      {updateError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{updateError}</p>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-4 border-b font-medium text-left">Name</th>
              <th className="py-3 px-4 border-b font-medium text-left">Email</th>
              <th className="py-3 px-4 border-b font-medium text-left">Phone</th>
              <th className="py-3 px-4 border-b font-medium text-left">Service</th>
              <th className="py-3 px-4 border-b font-medium text-left">Date</th>
              <th className="py-3 px-4 border-b font-medium text-left">Time</th>
              <th className="py-3 px-4 border-b font-medium text-left">Status</th>
              <th className="py-3 px-4 border-b font-medium text-left">Created</th>
            </tr>
          </thead>
          <tbody>
            {consultations.map(consultation => {
              // Get the appropriate status configuration or default
              const status = (consultation.status as StatusOption) || 'pending';
              const { bgColor, icon: StatusIcon } = statusConfig[status] || statusConfig.pending;

              return (
                <tr key={consultation.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">
                    {consultation.first_name} {consultation.last_name}
                  </td>
                  <td className="py-3 px-4 border-b">{consultation.email}</td>
                  <td className="py-3 px-4 border-b">{consultation.phone}</td>
                  <td className="py-3 px-4 border-b">{consultation.service_type || 'N/A'}</td>
                  <td className="py-3 px-4 border-b">{consultation.appointment_date || 'N/A'}</td>
                  <td className="py-3 px-4 border-b">{consultation.appointment_time || 'N/A'}</td>
                  <td className="py-3 px-4 border-b">
                    <div className="relative max-w-32">
                      <select
                        value={consultation.status || 'pending'}
                        onChange={e => handleStatusChange(consultation.id!, e.target.value)}
                        disabled={updatingId === consultation.id}
                        className={`${bgColor} text-white pl-3 pr-10 py-1.5 rounded text-sm font-medium cursor-pointer
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                            ${updatingId === consultation.id ? 'opacity-60 cursor-wait' : ''}
                            `}
                        style={{
                          appearance: 'none',
                          WebkitAppearance: 'none',
                          MozAppearance: 'none',
                        }}
                      >
                        {statusOptions.map(option => (
                          <option key={option} value={option} className="text-gray-800">
                            {statusConfig[option].label}
                          </option>
                        ))}
                      </select>
                      {/* Chevron Icon */}
                      <div className="pointer-events-none absolute inset-y-0 right-3  flex items-center text-gray-800">
                        <ChevronDown size={18} strokeWidth={2.5} />
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 border-b">
                    {consultation.created_at
                      ? new Date(consultation.created_at).toLocaleDateString()
                      : 'N/A'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
