import type { Metadata } from 'next'
import { LegalShell, LegalSection, type TocItem } from '@/components/legal/legal-shell'

export const metadata: Metadata = {
  title: 'Account & Data Deletion — ParryRoad',
  description:
    'How to request deletion of your ParryRoad game data and account associated with your Google Play Games account.',
}

const CONTACT_EMAIL = 'vlkx.dev@gmail.com'

const toc: TocItem[] = [
  { id: 'how-to-request', label: '1. How to request deletion' },
  { id: 'partial-deletion', label: '2. Partial data deletion' },
  { id: 'what-will-be-deleted', label: '3. What data will be deleted' },
  { id: 'what-may-be-retained', label: '4. What data may be retained' },
]

const link = 'font-semibold text-primary underline-offset-4 hover:underline'

export default function AccountDeletionPage() {
  return (
    <LegalShell
      title="Account & Data Deletion — ParryRoad"
      toc={toc}
      intro={
        <p>
          This page explains how to request deletion of your ParryRoad game data and account. Since
          ParryRoad does not maintain its own account database, all requests are handled by email.
        </p>
      }
    >
      <LegalSection id="how-to-request" title="1. How to request deletion">
        <p>
          ParryRoad does not maintain its own account database — sign-in is handled entirely through
          your Google Play Games account. To request deletion of your ParryRoad game data associated
          with your Google Play Games account, send an email to{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className={link}>
            {CONTACT_EMAIL}
          </a>{' '}
          with the subject line &quot;ParryRoad Account Deletion Request&quot;, including:
        </p>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li>Your Google Play Games display name (visible in the game&apos;s Profile screen)</li>
          <li>Your Player ID, if available (also visible in the Profile screen)</li>
        </ul>
        <p>We will process full account deletion requests within 30 days.</p>
      </LegalSection>

      <LegalSection id="partial-deletion" title="2. Partial data deletion">
        <p>
          If you&apos;d like to delete only specific data instead of your entire game data, send an
          email to{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className={link}>
            {CONTACT_EMAIL}
          </a>{' '}
          with the subject line &quot;ParryRoad Partial Data Deletion Request&quot;, specifying which
          data you&apos;d like removed (e.g. leaderboard entry only, saved progress only).
        </p>
      </LegalSection>

      <LegalSection id="what-will-be-deleted" title="3. What data will be deleted">
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li>Your Google Play Games leaderboard entry linked to your Player ID</li>
          <li>Your saved game progress (cloud save) associated with your account</li>
        </ul>
      </LegalSection>

      <LegalSection id="what-may-be-retained" title="4. What data may be retained">
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li>
            Anonymized, aggregated analytics data (Firebase Analytics) that cannot be linked back to
            an individual user, retained according to our analytics provider&apos;s standard
            retention policy
          </li>
          <li>
            Purchase transaction records that Google Play requires developers to retain for legal,
            tax, and fraud-prevention purposes
          </li>
        </ul>
      </LegalSection>
    </LegalShell>
  )
}
