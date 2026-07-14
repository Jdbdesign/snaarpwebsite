import { PRICING_PLANS, type PricingPlan } from './plans';

export type CompareCell =
  | { kind: 'text'; value: string }
  | { kind: 'price'; amount: number }
  | { kind: 'check' }
  | { kind: 'cross' };

export type CompareRow = {
  label: string;
  cells: CompareCell[];
};

export type CompareCategory = {
  name: string;
  rows: CompareRow[];
};

const text = (value: string): CompareCell => ({ kind: 'text', value });
const price = (amount: number): CompareCell => ({ kind: 'price', amount });
const check: CompareCell = { kind: 'check' };
const cross: CompareCell = { kind: 'cross' };

function valuesFor(pick: (plan: PricingPlan) => string): CompareCell[] {
  return PRICING_PLANS.map((plan) => text(pick(plan)));
}

// A row is only ever check/✗ for a plan if that plan's card (`features`)
// actually lists it — this table must never claim a plan includes
// something its own pricing card doesn't say it includes.
function hasFeature(plan: PricingPlan, featureText: string): boolean {
  return plan.features.includes(featureText);
}

function featureRow(label: string, featureText = label): CompareRow {
  return {
    label,
    cells: PRICING_PLANS.map((plan) => (hasFeature(plan, featureText) ? check : cross)),
  };
}

// "Apps included" is derived straight from each plan's addonsIconNames —
// the same bundled-apps list already rendered as icons on the pricing
// card — so a plan only shows a check once that app actually appears in
// its own icon list, not from any assumed progression.
function buildAppRows(): CompareRow[] {
  const firstIndexByApp = new Map<string, number>();
  PRICING_PLANS.forEach((plan, planIndex) => {
    plan.addonsIconNames.forEach((appName) => {
      if (!firstIndexByApp.has(appName)) firstIndexByApp.set(appName, planIndex);
    });
  });

  return Array.from(firstIndexByApp.keys()).map((appName) => ({
    label: appName,
    cells: PRICING_PLANS.map((plan) => (plan.addonsIconNames.includes(appName) ? check : cross)),
  }));
}

export const COMPARE_CATEGORIES: CompareCategory[] = [
  {
    name: 'Core',
    rows: [
      { label: 'Users', cells: valuesFor((plan) => String(plan.users)) },
      { label: 'Shared storage', cells: valuesFor((plan) => plan.storageLabel) },
      { label: 'Max emails per day', cells: valuesFor((plan) => String(plan.maxEmailsPerDay)) },
      { label: 'File transfer', cells: valuesFor((plan) => plan.fileTransferLabel) },
    ],
  },
  {
    name: 'AI & Productivity',
    rows: [
      {
        label: 'AI replies (Basic) per user',
        cells: PRICING_PLANS.map((plan) => (hasFeature(plan, 'AI replies') ? price(1) : cross)),
      },
      featureRow('Email scheduling'),
    ],
  },
  {
    name: 'Support',
    rows: [featureRow('Email support'), featureRow('Spam protection'), featureRow('Dedicated account manager')],
  },
  {
    name: 'Apps Included',
    rows: buildAppRows(),
  },
];
