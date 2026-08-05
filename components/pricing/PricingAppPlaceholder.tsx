interface PricingAppPlaceholderProps {
  appName: string;
}

/**
 * Placeholder content for individual app pricing tabs.
 * The Monthly/Yearly toggle is hidden when this placeholder is shown
 * (handled by the parent page). Real per-app pricing tiers will replace
 * this component in a later phase.
 */
export function PricingAppPlaceholder({ appName }: PricingAppPlaceholderProps) {
  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-10 py-24 text-center">
      <div className="rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 p-12">
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Pricing for {appName}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Individual app pricing is coming soon. Check back later or explore the full
          Workspace plan for bundled access to all Snaarp apps.
        </p>
      </div>
    </section>
  );
}
