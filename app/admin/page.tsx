import { getConsultationsServer, getConsultations } from '../actions/consultation';
import AdminConsultationsClient from '@/components/admin/AdminConsultationsClient';
import PasswordProtection from '@/components/admin/PasswordProtection';
import { Suspense } from 'react';
import { cookies } from 'next/headers';

export const revalidate = 60; // Revalidate this page every 60 seconds

// Temporary admin password
const ADMIN_PASSWORD = 'admin123'; // You should change this to something more secure

export default async function AdminPage() {
  // Fetch initial consultations data on the server
  const consultations = await getConsultationsServer();

  // Check for admin authentication cookie using manual cookie parsing
  // This is a workaround for Next.js 15's cookie API
  const cookieStore = await cookies();
  const cookieCheck = cookieStore.get('admin-auth');
  const isAuthenticated = cookieCheck?.value === 'true';

  // Log on the server for debugging
  console.log(`Server-side: Fetched ${consultations.length} consultations`);

  return (
    <PasswordProtection password={ADMIN_PASSWORD} isAuthenticated={isAuthenticated}>
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<p className="text-gray-500">Loading consultations data...</p>}>
          <AdminConsultationsClient
            initialConsultations={consultations}
            refreshConsultations={getConsultations}
          />
        </Suspense>
      </div>
    </PasswordProtection>
  );
}
