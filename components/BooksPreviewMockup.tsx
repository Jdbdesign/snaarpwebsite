'use client';

import { useState } from 'react';
import { Menu, Search, LayoutGrid, Users, Bell, Settings, ChevronDown, Home, Package, ShoppingCart, ShoppingBag, Landmark, BookOpen, BarChart3, FileText, Plus, MoreHorizontal, X, ImagePlus, CircleUserRound, Receipt, Mail, CheckCircle2, XCircle } from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

const NAV_ITEMS = [
  { label: 'Home', Icon: Home },
  { label: 'Products', Icon: Package },
  { label: 'Sales', Icon: ShoppingCart },
  { label: 'Purchases', Icon: ShoppingBag },
  { label: 'Banking', Icon: Landmark },
  { label: 'Accountant', Icon: BookOpen },
  { label: 'Reports', Icon: BarChart3 },
  { label: 'Documents', Icon: FileText },
];

const ITEMS = [
  { name: 'Website Design Package', purchaseDesc: 'Freelance design contractor', purchaseRate: 'GBP450.00', desc: 'Custom website design for clients', rate: 'GBP1,200.00', unit: 'Project' },
  { name: 'Consulting Hours', purchaseDesc: '—', purchaseRate: 'GBP0.00', desc: 'Hourly business consulting', rate: 'GBP85.00', unit: 'Hour' },
  { name: 'Ergonomic Office Chair', purchaseDesc: 'Wholesale furniture supplier', purchaseRate: 'GBP60.00', desc: 'Adjustable ergonomic office chair', rate: 'GBP120.00', unit: 'Each' },
  { name: 'Annual Software License', purchaseDesc: 'Vendor license renewal', purchaseRate: 'GBP200.00', desc: 'Annual software subscription seat', rate: 'GBP350.00', unit: 'License' },
  { name: 'Laptop Stand', purchaseDesc: 'Bulk supplier order', purchaseRate: 'GBP15.00', desc: 'Aluminum adjustable laptop stand', rate: 'GBP35.00', unit: 'Each' },
];

const CUSTOMERS = [
  { name: 'Olayinka Studio', email: 'hello@olayinkastudio.com', phone: '+44 7700 900123', status: 'Active' },
  { name: 'Bright Path Ltd', email: 'accounts@brightpath.co.uk', phone: '+44 7700 900456', status: 'Active' },
  { name: 'Marina Foods', email: 'billing@marinafoods.com', phone: '+44 7700 900789', status: 'Active' },
  { name: 'Cobalt Interiors', email: 'finance@cobaltinteriors.com', phone: '+44 7700 900234', status: 'Active' },
  { name: 'Harewood & Co', email: 'admin@harewoodco.com', phone: '+44 7700 900567', status: 'Inactive' },
  { name: 'Vantage Media Group', email: 'accounts@vantagemedia.com', phone: '+44 7700 900890', status: 'Active' },
  { name: 'Elmswood Traders', email: 'contact@elmswoodtraders.com', phone: '+44 7700 900321', status: 'Active' },
];

const QUOTES = [
  { num: 'QT-0001', customer: 'Olayinka Studio', date: '9/2/2026', amount: 'GBP1,200.00', status: 'Accepted' },
  { num: 'QT-0002', customer: 'Bright Path Ltd', date: '9/4/2026', amount: 'GBP450.00', status: 'Sent' },
  { num: 'QT-0003', customer: 'Marina Foods', date: '9/5/2026', amount: 'GBP2,340.00', status: 'Invoiced' },
  { num: 'QT-0004', customer: 'Cobalt Interiors', date: '9/6/2026', amount: 'GBP680.00', status: 'Draft' },
  { num: 'QT-0005', customer: 'Vantage Media Group', date: '9/8/2026', amount: 'GBP1,050.00', status: 'Sent' },
  { num: 'QT-0006', customer: 'Elmswood Traders', date: '9/9/2026', amount: 'GBP920.00', status: 'Accepted' },
  { num: 'QT-0007', customer: 'Harewood & Co', date: '9/10/2026', amount: 'GBP310.00', status: 'Declined' },
];

const QUOTE_STATUS_STYLE: Record<string, { color: string; bg: string }> = {
  Accepted: { color: '#059669', bg: '#ECFDF5' },
  Sent: { color: '#2563eb', bg: '#EFF6FF' },
  Invoiced: { color: '#7C3AED', bg: '#F3EFFF' },
  Draft: { color: '#888', bg: '#f4f4f6' },
  Declined: { color: '#dc2626', bg: '#FEF2F2' },
};

const INVOICES = [
  { num: 'INV-000001', customer: 'Olayinka Studio', date: '9/2/2026', due: '9/2/2026', amount: 'GBP1,200.00', status: 'Paid' },
  { num: 'INV-000002', customer: 'Bright Path Ltd', date: '9/3/2026', due: '9/17/2026', amount: 'GBP450.00', status: 'Unpaid' },
  { num: 'INV-000003', customer: 'Marina Foods', date: '9/4/2026', due: '9/18/2026', amount: 'GBP2,340.00', status: 'Overdue' },
  { num: 'INV-000004', customer: 'Cobalt Interiors', date: '9/5/2026', due: '9/19/2026', amount: 'GBP680.00', status: 'Partially Paid' },
  { num: 'INV-000005', customer: 'Vantage Media Group', date: '9/6/2026', due: '9/20/2026', amount: 'GBP1,050.00', status: 'Sent' },
  { num: 'INV-000006', customer: 'Elmswood Traders', date: '9/7/2026', due: '9/21/2026', amount: 'GBP920.00', status: 'Draft' },
  { num: 'INV-000007', customer: 'Harewood & Co', date: '9/8/2026', due: '9/22/2026', amount: 'GBP310.00', status: 'Paid' },
];

const INVOICE_STATUS_STYLE: Record<string, { color: string; bg: string }> = {
  Paid: { color: '#059669', bg: '#ECFDF5' },
  Unpaid: { color: '#2563eb', bg: '#EFF6FF' },
  Overdue: { color: '#dc2626', bg: '#FEF2F2' },
  'Partially Paid': { color: '#d97706', bg: '#FFFBEB' },
  Sent: { color: '#2563eb', bg: '#EFF6FF' },
  Draft: { color: '#888', bg: '#f4f4f6' },
};

const BANK_ACCOUNTS = [
  { name: 'Amara Whitfield', bank: 'Chase Bank', type: 'Checking', number: '****4521', balance: '$12,450.00', status: 'Active' },
  { name: 'Marcus Lindqvist', bank: 'Barclays', type: 'Savings', number: '****7789', balance: '£8,200.00', status: 'Active' },
  { name: 'Sofia Alvarez', bank: 'HSBC', type: 'Checking', number: '****3012', balance: '£15,600.00', status: 'Active' },
  { name: 'Daniel Osei', bank: 'Wells Fargo', type: 'Business', number: '****9087', balance: '$34,750.00', status: 'Active' },
  { name: 'Elena Petrova', bank: 'Deutsche Bank', type: 'Savings', number: '****5643', balance: '£6,320.00', status: 'Inactive' },
];

const BANK_STATUS_STYLE: Record<string, { color: string; bg: string }> = {
  Active: { color: '#059669', bg: '#ECFDF5' },
  Inactive: { color: '#888', bg: '#f4f4f6' },
};

export function BooksPreviewMockup({ onEnd }: { onEnd?: () => void } = {}) {
  const [activeNav, setActiveNav] = useState('Home');
  const [tour, setTour] = useState(1); // 1=home, 2=products(empty), 3=new item, 4=products(filled), 5=customers(empty), 6=new customer, 7=customers(filled), 8=quotes(empty), 9=new quote, 10=quotes(filled), 11=invoices(empty), 12=new invoice, 13=invoices(filled), 14=bank accounts(empty), 15=new bank account, 16=bank accounts(filled), 0=done
  const [showProducts, setShowProducts] = useState(false);
  const [showNewItem, setShowNewItem] = useState(false);
  const [itemsAdded, setItemsAdded] = useState(false);
  const [salesExpanded, setSalesExpanded] = useState(false);
  const [showCustomers, setShowCustomers] = useState(false);
  const [showNewCustomer, setShowNewCustomer] = useState(false);
  const [customersAdded, setCustomersAdded] = useState(false);
  const [showQuotes, setShowQuotes] = useState(false);
  const [showNewQuote, setShowNewQuote] = useState(false);
  const [quotesAdded, setQuotesAdded] = useState(false);
  const [showInvoices, setShowInvoices] = useState(false);
  const [showNewInvoice, setShowNewInvoice] = useState(false);
  const [invoicesAdded, setInvoicesAdded] = useState(false);
  const [bankingExpanded, setBankingExpanded] = useState(false);
  const [showBanking, setShowBanking] = useState(false);
  const [showNewBankAccount, setShowNewBankAccount] = useState(false);
  const [bankAccountsAdded, setBankAccountsAdded] = useState(false);

  // Every top-level page is mutually exclusive — reset all of them before setting the target,
  // same pattern as the CRM mockup's gotoX() helpers (see PRODUCT_SHOWCASE_HANDOFF.md).
  // A page's own "New X" sub-form is NOT a top-level page — it never gets a gotoX() helper,
  // it just toggles its own showNewX flag while the parent page's render gate excludes it
  // (showParent && !showNewX). Mixing the two patterns stacks both blocks in the DOM.
  const gotoHome = () => { setShowProducts(false); setShowNewItem(false); setShowCustomers(false); setShowNewCustomer(false); setShowQuotes(false); setShowNewQuote(false); setShowInvoices(false); setShowNewInvoice(false); setShowBanking(false); setShowNewBankAccount(false); setActiveNav('Home'); };
  const gotoProducts = () => { setShowProducts(true); setShowNewItem(false); setShowCustomers(false); setShowNewCustomer(false); setShowQuotes(false); setShowNewQuote(false); setShowInvoices(false); setShowNewInvoice(false); setShowBanking(false); setShowNewBankAccount(false); setActiveNav('Products'); };
  const gotoCustomers = () => { setShowProducts(false); setShowNewItem(false); setShowCustomers(true); setShowNewCustomer(false); setShowQuotes(false); setShowNewQuote(false); setShowInvoices(false); setShowNewInvoice(false); setShowBanking(false); setShowNewBankAccount(false); setActiveNav('Sales'); };
  const gotoQuotes = () => { setShowProducts(false); setShowNewItem(false); setShowCustomers(false); setShowNewCustomer(false); setShowQuotes(true); setShowNewQuote(false); setShowInvoices(false); setShowNewInvoice(false); setShowBanking(false); setShowNewBankAccount(false); setActiveNav('Sales'); };
  const gotoInvoices = () => { setShowProducts(false); setShowNewItem(false); setShowCustomers(false); setShowNewCustomer(false); setShowQuotes(false); setShowNewQuote(false); setShowInvoices(true); setShowNewInvoice(false); setShowBanking(false); setShowNewBankAccount(false); setActiveNav('Sales'); };
  const gotoBanking = () => { setShowProducts(false); setShowNewItem(false); setShowCustomers(false); setShowNewCustomer(false); setShowQuotes(false); setShowNewQuote(false); setShowInvoices(false); setShowNewInvoice(false); setShowBanking(true); setShowNewBankAccount(false); setActiveNav('Banking'); };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden', background: '#f4f5f7', position: 'relative' }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 18px', borderBottom: '1px solid #eef0f2', background: '#fff', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '7px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Receipt size={13} style={{ color: '#fff' }} />
          </div>
          <span style={{ fontSize: '14px', fontWeight: 800, color: '#1a1a1a', letterSpacing: '-0.02em' }}>Snaarp Books</span>
        </div>
        <div style={{ flex: 1, maxWidth: '460px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', background: '#f4f5f7', borderRadius: '18px', color: '#aaa', fontSize: '11px' }}>
          <Search size={13} /> Search... ( / )
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
          <button style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 14px', borderRadius: '16px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}><Plus size={12} /> New</button>
          <LayoutGrid size={15} style={{ color: '#888' }} />
          <Users size={15} style={{ color: '#888' }} />
          <Bell size={15} style={{ color: '#888' }} />
          <Settings size={15} style={{ color: '#888' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700 }}>J</div>
            <ChevronDown size={12} style={{ color: '#aaa' }} />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <div style={{ width: '150px', flexShrink: 0, background: '#fff', borderRight: '1px solid #eef0f2', padding: '12px 10px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          <Menu size={13} style={{ color: '#bbb', marginBottom: '10px', marginLeft: '2px' }} />
          {NAV_ITEMS.map((item) => {
            if (item.label === 'Sales') {
              const salesOpen = salesExpanded || showCustomers || showNewCustomer || showQuotes || showNewQuote || showInvoices || showNewInvoice;
              return (
                <div key="Sales">
                  <div onClick={() => setSalesExpanded((v) => !v)} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '8px', background: salesOpen ? '#f3efff' : 'transparent', color: salesOpen ? '#7C3AED' : '#555', fontWeight: salesOpen ? 600 : 500, fontSize: '11px', cursor: 'pointer', marginBottom: '2px' }}>
                    <ShoppingCart size={14} /> <span style={{ flex: 1 }}>Sales</span>
                    <ChevronDown size={11} style={{ color: '#ccc', transform: salesOpen ? 'none' : 'rotate(-90deg)' }} />
                  </div>
                  {salesOpen && (
                    <div style={{ marginBottom: '2px' }}>
                      <div onClick={() => { gotoCustomers(); if (tour === 4) setTour(5); }} style={{ padding: '6px 10px 6px 30px', borderRadius: '8px', fontSize: '10.5px', fontWeight: showCustomers ? 600 : 500, color: showCustomers ? '#7C3AED' : '#777', cursor: 'pointer' }}>Customers</div>
                      <div onClick={() => { gotoQuotes(); if (tour === 7) setTour(8); }} style={{ padding: '6px 10px 6px 30px', borderRadius: '8px', fontSize: '10.5px', fontWeight: showQuotes ? 600 : 500, color: showQuotes ? '#7C3AED' : '#777', cursor: 'pointer' }}>Quotes</div>
                      <div onClick={() => { gotoInvoices(); if (tour === 10) setTour(11); }} style={{ padding: '6px 10px 6px 30px', borderRadius: '8px', fontSize: '10.5px', fontWeight: showInvoices ? 600 : 500, color: showInvoices ? '#7C3AED' : '#777', cursor: 'pointer' }}>Invoices</div>
                      <div style={{ padding: '6px 10px 6px 30px', borderRadius: '8px', fontSize: '10.5px', fontWeight: 500, color: '#aaa' }}>Sales Receipts</div>
                      <div style={{ padding: '6px 10px 6px 30px', borderRadius: '8px', fontSize: '10.5px', fontWeight: 500, color: '#aaa' }}>Recurring Invoices</div>
                      <div style={{ padding: '6px 10px 6px 30px', borderRadius: '8px', fontSize: '10.5px', fontWeight: 500, color: '#aaa' }}>Payments Received</div>
                      <div style={{ padding: '6px 10px 6px 30px', borderRadius: '8px', fontSize: '10.5px', fontWeight: 500, color: '#aaa' }}>Credit Notes</div>
                    </div>
                  )}
                </div>
              );
            }
            if (item.label === 'Banking') {
              const bankingOpen = bankingExpanded || showBanking || showNewBankAccount;
              return (
                <div key="Banking">
                  <div onClick={() => setBankingExpanded((v) => !v)} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '8px', background: bankingOpen ? '#f3efff' : 'transparent', color: bankingOpen ? '#7C3AED' : '#555', fontWeight: bankingOpen ? 600 : 500, fontSize: '11px', cursor: 'pointer', marginBottom: '2px' }}>
                    <Landmark size={14} /> <span style={{ flex: 1 }}>Banking</span>
                    <ChevronDown size={11} style={{ color: '#ccc', transform: bankingOpen ? 'none' : 'rotate(-90deg)' }} />
                  </div>
                  {bankingOpen && (
                    <div style={{ marginBottom: '2px' }}>
                      <div onClick={() => { gotoBanking(); if (tour === 13) setTour(14); }} style={{ padding: '6px 10px 6px 30px', borderRadius: '8px', fontSize: '10.5px', fontWeight: showBanking ? 600 : 500, color: showBanking ? '#7C3AED' : '#777', cursor: 'pointer' }}>Bank Accounts</div>
                      <div style={{ padding: '6px 10px 6px 30px', borderRadius: '8px', fontSize: '10.5px', fontWeight: 500, color: '#aaa' }}>Bank Transactions</div>
                    </div>
                  )}
                </div>
              );
            }
            const interactive = item.label === 'Home' || item.label === 'Products';
            const active = (item.label === 'Home' && activeNav === 'Home') || (item.label === 'Products' && activeNav === 'Products');
            return (
              <div
                key={item.label}
                onClick={() => {
                  if (item.label === 'Home') { gotoHome(); }
                  else if (item.label === 'Products') { gotoProducts(); if (tour === 1) setTour(2); }
                }}
                style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '8px', background: active ? '#f3efff' : 'transparent', color: active ? '#7C3AED' : '#555', fontWeight: active ? 600 : 500, fontSize: '11px', cursor: interactive ? 'pointer' : 'default', marginBottom: '2px' }}
              >
                <item.Icon size={14} /> <span>{item.label}</span>
              </div>
            );
          })}
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '8px', color: '#555', fontSize: '11px', marginTop: 'auto' }}>
            <Settings size={14} /> <span>Settings</span>
          </div>
        </div>

        {/* Main */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          {/* Home dashboard */}
          {!showProducts && !showCustomers && !showNewCustomer && !showQuotes && !showNewQuote && !showInvoices && !showNewInvoice && !showBanking && !showNewBankAccount && (
          <div style={{ position: 'relative', height: '100%', overflowY: 'auto', overflowX: 'hidden', padding: '20px 26px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <CircleUserRound size={30} style={{ color: '#888' }} />
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a' }}>Hello, Jordan Blake</div>
                <div style={{ fontSize: '9.5px', color: '#999' }}>Gold</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '22px', borderBottom: '1px solid #eef0f2', marginBottom: '18px' }}>
              {['Dashboard', 'Getting Started', 'Recent Updates'].map((t) => {
                const active = t === 'Dashboard';
                return (
                  <div key={t} style={{ paddingBottom: '9px', fontSize: '11px', fontWeight: active ? 700 : 500, color: active ? '#2563eb' : '#888', borderBottom: active ? '2px solid #2563eb' : '2px solid transparent' }}>{t}</div>
                );
              })}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '18px' }}>
              <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700 }}>Total Receivables</span>
                  <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#2563eb', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px' }}><Plus size={11} /> New</span>
                </div>
                <div style={{ fontSize: '9.5px', color: '#999', marginBottom: '4px' }}>Total Unpaid Invoices</div>
                <div style={{ fontSize: '19px', fontWeight: 800, marginBottom: '12px' }}>GBP0.00</div>
                <div style={{ borderTop: '1px solid #f0f0f2', paddingTop: '10px', fontSize: '9.5px', color: '#666', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb' }} />Current : GBP0.00</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b' }} />Overdue : GBP0.00 <ChevronDown size={10} /></span>
                </div>
              </div>
              <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700 }}>Total Payables</span>
                  <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#2563eb', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px' }}><Plus size={11} /> New</span>
                </div>
                <div style={{ fontSize: '9.5px', color: '#999', marginBottom: '4px' }}>Total Unpaid Bills</div>
                <div style={{ fontSize: '19px', fontWeight: 800, marginBottom: '12px' }}>GBP0.00</div>
                <div style={{ borderTop: '1px solid #f0f0f2', paddingTop: '10px', fontSize: '9.5px', color: '#666', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb' }} />Current : GBP0.00</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b' }} />Overdue : GBP0.00 <ChevronDown size={10} /></span>
                </div>
              </div>
            </div>

            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px', marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '12.5px', fontWeight: 700 }}>Cash Flow</span>
                <span style={{ marginLeft: 'auto', fontSize: '9.5px', color: '#888', display: 'flex', alignItems: 'center', gap: '3px' }}>This Fiscal Year <ChevronDown size={10} /></span>
              </div>
              <div style={{ border: '1px solid #f0f0f2', borderRadius: '10px', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                  <span style={{ fontSize: '10.5px', fontWeight: 700 }}>Cash Flow</span>
                  <span style={{ marginLeft: 'auto', fontSize: '9px', color: '#666', border: '1px solid #eee', borderRadius: '6px', padding: '3px 8px', display: 'flex', alignItems: 'center', gap: '3px' }}>This Month <ChevronDown size={9} /></span>
                </div>
                <div style={{ position: 'relative', height: '140px', marginLeft: '18px', marginRight: '10px' }}>
                  {[4, 3, 2, 1, 0].map((v, i) => (
                    <div key={v} style={{ position: 'absolute', left: '-16px', top: `${i * 25}%`, transform: 'translateY(-50%)', fontSize: '8px', color: '#aaa' }}>{v}</div>
                  ))}
                  {[0, 1, 2, 3].map((v) => (
                    <div key={v} style={{ position: 'absolute', left: 0, right: 0, top: `${v * 25}%`, borderTop: '1px dashed #eee' }} />
                  ))}
                  <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, borderTop: '1.5px solid #ccc' }} />
                  <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, borderLeft: '1px dashed #eee' }} />
                  <div style={{ position: 'absolute', left: '25%', bottom: '-18px', fontSize: '8.5px', color: '#999', transform: 'translateX(-50%)' }}>Week 1</div>
                  <div style={{ position: 'absolute', left: '85%', bottom: '-18px', fontSize: '8.5px', color: '#999', transform: 'translateX(-50%)' }}>Week 2</div>
                </div>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '30px', fontSize: '9px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#059669' }}><span style={{ width: '8px', height: '8px', background: '#059669', borderRadius: '2px' }} /> Incoming</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#dc2626' }}><span style={{ width: '8px', height: '8px', background: '#dc2626', borderRadius: '2px' }} /> Outgoing</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '18px' }}>
              <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px', minHeight: '110px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, marginBottom: '30px' }}>Projects</div>
                <div style={{ textAlign: 'center', color: '#999', fontSize: '10px' }}>Add Project(s) to this watchlist</div>
              </div>
              <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px', minHeight: '110px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, marginBottom: '20px' }}>Bank and Credit Cards</div>
                <div style={{ textAlign: 'center', color: '#999', fontSize: '10px', marginBottom: '6px' }}>Yet to add Bank and Credit Card details</div>
                <div style={{ textAlign: 'center', color: '#2563eb', fontSize: '10px', fontWeight: 600 }}>Add Bank Account</div>
              </div>
            </div>

            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700 }}>Account Watchlist</span>
                <span style={{ marginLeft: 'auto', fontSize: '9.5px', color: '#666', border: '1px solid #eee', borderRadius: '6px', padding: '3px 8px', display: 'flex', alignItems: 'center', gap: '3px' }}>Accrual <ChevronDown size={9} /></span>
              </div>
              <div style={{ textAlign: 'center', color: '#999', fontSize: '10px' }}>No accounts added to watchlist</div>
            </div>

            {/* Coach mark — explains the Home dashboard */}
            {tour === 1 && (
              <div style={{ position: 'absolute', top: '60px', left: '380px', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="Your financial command center"
                  subtitle="See receivables, payables, and cash flow at a glance the moment you log in. Click Next to add your first product."
                  onNext={() => { gotoProducts(); setTour(2); }}
                  top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next"
                />
              </div>
            )}
          </div>
          )}

          {/* Products (Active Items) */}
          {showProducts && !showNewItem && (
          <div style={{ position: 'relative', height: '100%', overflowY: 'auto', overflowX: 'hidden', padding: '20px 26px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '16px', fontWeight: 800 }}>Active Items <ChevronDown size={13} /></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
                <button onClick={() => { setShowNewItem(true); if (tour === 2) setTour(3); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '8px 16px', borderRadius: '8px', background: '#2563eb', color: '#fff', border: 'none', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}><Plus size={12} /> New</button>
                <MoreHorizontal size={18} style={{ color: '#aaa' }} />
              </div>
            </div>

            {/* Coach mark — on the left side of the +New button, positioned against the page
                (not nested inside a small button-wrapper — that let it render outside the
                visible box entirely, same gotcha as the CRM Tasks page). */}
            {tour === 2 && !showNewItem && (
              <div style={{ position: 'absolute', top: '35px', left: '650px', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="Add what you sell"
                  subtitle="Products and services you buy or sell live here — pricing, tax, and vendor details all in one record. Click Next."
                  onNext={() => { setShowNewItem(true); setTour(3); }}
                  top="0" left="0" arrowSide="right" arrowOffset="26px" buttonLabel="Next"
                />
              </div>
            )}

            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '0.3fr 1.6fr 1.6fr 1fr 1.6fr 0.8fr 0.9fr', gap: '8px', padding: '11px 16px', borderBottom: '1px solid #eef0f2', fontSize: '8.5px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.03em', alignItems: 'center' }}>
                <span />
                <span>Name</span><span>Purchase Description</span><span>Purchase Rate</span><span>Description</span><span>Rate</span><span>Usage Unit</span>
              </div>
              {!itemsAdded ? (
                <div style={{ textAlign: 'center', padding: '48px 20px', color: '#999', fontSize: '11px' }}>
                  No items yet. Click &quot;+ New&quot; to create one.
                </div>
              ) : (
                ITEMS.map((it) => (
                  <div key={it.name} style={{ display: 'grid', gridTemplateColumns: '0.3fr 1.6fr 1.6fr 1fr 1.6fr 0.8fr 0.9fr', gap: '8px', padding: '11px 16px', borderBottom: '1px solid #f6f6f8', alignItems: 'center', fontSize: '9.5px' }}>
                    <span />
                    <span style={{ fontWeight: 600, color: '#1a1a1a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.name}</span>
                    <span style={{ color: '#666', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.purchaseDesc}</span>
                    <span style={{ color: '#666' }}>{it.purchaseRate}</span>
                    <span style={{ color: '#666', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.desc}</span>
                    <span style={{ color: '#666' }}>{it.rate}</span>
                    <span style={{ color: '#666' }}>{it.unit}</span>
                  </div>
                ))
              )}
            </div>

            {/* Coach mark — explains the populated products list */}
            {tour === 4 && (
              <div style={{ position: 'absolute', top: '150px', left: '400px', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="Every product, one list"
                  subtitle="Track selling price, cost, and vendor for everything you buy or sell — it all flows straight into your invoices and reports. Click Next to add a customer."
                  onNext={() => { gotoCustomers(); setTour(5); }}
                  top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Next"
                />
              </div>
            )}
          </div>
          )}

          {/* Customers */}
          {showCustomers && !showNewCustomer && (
          <div style={{ position: 'relative', height: '100%', overflowY: 'auto', overflowX: 'hidden', padding: '20px 26px' }}>
            <div style={{ fontSize: '17px', fontWeight: 800, marginBottom: '16px' }}>Customers</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <input placeholder="Search by name..." style={{ width: '220px', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              <div style={{ position: 'relative' }}>
                <select style={{ appearance: 'none', padding: '9px 30px 9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555' }}><option>Active</option></select>
                <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
              </div>
              <button onClick={() => { setShowNewCustomer(true); if (tour === 5) setTour(6); }} style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '9px 18px', borderRadius: '8px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}><Plus size={12} /> New Customer</button>
            </div>

            {/* Coach mark — on the left side of the +New Customer button, positioned against
                the page (see the CRM/Books "small button-wrapper" gotcha documented in the
                handoff — never nest this inside a wrapper sized to the button). */}
            {tour === 5 && !showNewCustomer && (
              <div style={{ position: 'absolute', top: '35px', left: '640px', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="Bring your customers in"
                  subtitle="Every customer record ties together their quotes, invoices, and payment history. Click Next."
                  onNext={() => { setShowNewCustomer(true); setTour(6); }}
                  top="0" left="0" arrowSide="right" arrowOffset="26px" buttonLabel="Next"
                />
              </div>
            )}

            {!customersAdded ? (
              <div style={{ textAlign: 'center', color: '#999', fontSize: '11px', padding: '60px 0' }}>No results found.</div>
            ) : (
              <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1.4fr 1fr', gap: '8px', padding: '11px 16px', borderBottom: '1px solid #eef0f2', fontSize: '8.5px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  <span>Name</span><span>Email</span><span>Phone</span><span>Status</span>
                </div>
                {CUSTOMERS.map((c) => {
                  const st = c.status === 'Active' ? { color: '#059669', bg: '#ECFDF5' } : { color: '#888', bg: '#f4f4f6' };
                  return (
                    <div key={c.name} style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1.4fr 1fr', gap: '8px', padding: '11px 16px', borderBottom: '1px solid #f6f6f8', alignItems: 'center', fontSize: '9.5px' }}>
                      <span style={{ fontWeight: 600, color: '#1a1a1a' }}>{c.name}</span>
                      <span style={{ color: '#2563eb' }}>{c.email}</span>
                      <span style={{ color: '#666' }}>{c.phone}</span>
                      <span><span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '12px', fontSize: '8.5px', fontWeight: 700, color: st.color, background: st.bg }}>{c.status}</span></span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Coach mark — explains the populated customers list */}
            {tour === 7 && (
              <div style={{ position: 'absolute', top: '150px', left: '400px', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="Every customer, ready to bill"
                  subtitle="Search, filter by status, and jump straight into a quote or invoice from any customer record. Click Next to see quotes."
                  onNext={() => { gotoQuotes(); setTour(8); }}
                  top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Next"
                />
              </div>
            )}
          </div>
          )}

          {/* New Customer page */}
          {showNewCustomer && (
          <div style={{ position: 'relative', height: '100%', overflowY: 'auto', overflowX: 'hidden', padding: '20px 26px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
              <span style={{ fontSize: '16px', fontWeight: 800 }}>New Customer</span>
              <X size={16} style={{ marginLeft: 'auto', color: '#aaa', cursor: 'pointer' }} onClick={() => setShowNewCustomer(false)} />
            </div>

            <div style={{ maxWidth: '640px', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '14px' }}>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#333', width: '86px' }}>Customer Type</span>
                <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', color: '#333' }}><span style={{ width: '13px', height: '13px', borderRadius: '50%', border: '4.5px solid #2563eb', display: 'inline-block' }} /> Business</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', color: '#333' }}><span style={{ width: '13px', height: '13px', borderRadius: '50%', border: '1.5px solid #ccc', display: 'inline-block' }} /> Individual</label>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '86px 0.7fr 1fr 1fr', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>Primary Contact</span>
                <select style={{ padding: '9px 8px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10px', color: '#555' }}><option>Salutation</option></select>
                <input placeholder="First Name" style={{ padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
                <input placeholder="Last Name" style={{ padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '86px 1fr', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>Company Name</span>
                <input style={{ padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '86px 1fr', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#dc2626' }}>Display Name*</span>
                <input placeholder="Select or type to add" style={{ padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '86px 1fr', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>Email Address</span>
                <input style={{ padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '86px 1fr 1fr', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>Phone</span>
                <div style={{ display: 'flex', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
                  <span style={{ padding: '9px 8px', background: '#f8f8fa', color: '#999', fontSize: '10px', borderRight: '1px solid #eee' }}>+44</span>
                  <input placeholder="Work Phone" style={{ flex: 1, padding: '9px 10px', border: 'none', outline: 'none', fontSize: '10.5px' }} />
                </div>
                <div style={{ display: 'flex', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
                  <span style={{ padding: '9px 8px', background: '#f8f8fa', color: '#999', fontSize: '10px', borderRight: '1px solid #eee' }}>+44</span>
                  <input placeholder="Mobile" style={{ flex: 1, padding: '9px 10px', border: 'none', outline: 'none', fontSize: '10.5px' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '86px 1fr', gap: '10px', alignItems: 'center', marginBottom: '18px' }}>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>Customer Language</span>
                <div style={{ position: 'relative' }}>
                  <select style={{ appearance: 'none', width: '100%', padding: '9px 30px 9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555', boxSizing: 'border-box' }}><option>English</option></select>
                  <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '18px', borderBottom: '1px solid #eef0f2', marginBottom: '16px', fontSize: '10px' }}>
                {['Other Details', 'Address', 'Contact Persons', 'Custom Fields', 'Reporting Tags', 'Remarks'].map((t, i) => (
                  <div key={t} style={{ paddingBottom: '9px', fontWeight: i === 0 ? 700 : 500, color: i === 0 ? '#2563eb' : '#888', borderBottom: i === 0 ? '2px solid #2563eb' : '2px solid transparent' }}>{t}</div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '86px 1fr', gap: '10px', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>Tax Rate</span>
                <select style={{ padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#999' }}><option>Select a Tax</option></select>
              </div>
              <div style={{ fontSize: '8.5px', color: '#aaa', marginBottom: '12px', marginLeft: '96px' }}>To associate more than one tax, you need to create a tax group in Settings.</div>

              <div style={{ display: 'grid', gridTemplateColumns: '86px 1fr', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>Company ID</span>
                <input style={{ padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '86px 1fr', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>Currency</span>
                <select style={{ padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555' }}><option>GBP - British Pound</option></select>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '86px 1fr', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>Accounts Receivable</span>
                <select style={{ padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#999' }}><option>Select an account</option></select>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '86px 1fr', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>Opening Balance</span>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
                  <span style={{ padding: '9px 10px', background: '#f8f8fa', color: '#999', fontSize: '10px', borderRight: '1px solid #eee' }}>GBP</span>
                  <input style={{ flex: 1, padding: '9px 10px', border: 'none', outline: 'none', fontSize: '10.5px' }} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '86px 1fr', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>Payment Terms</span>
                <select style={{ padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555' }}><option>Due on Receipt</option></select>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '86px 1fr', gap: '10px', alignItems: 'center', marginBottom: '18px' }}>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>Enable Portal?</span>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', color: '#555' }}><input type="checkbox" /> Allow portal access for this customer</label>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #f0f0f2', paddingTop: '16px' }}>
                <button onClick={() => { setCustomersAdded(true); gotoCustomers(); if (tour === 6) setTour(7); }} style={{ padding: '9px 22px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}>Save</button>
                <span onClick={() => setShowNewCustomer(false)} style={{ fontSize: '10px', color: '#888', cursor: 'pointer' }}>Cancel</span>
              </div>

              {/* Coach mark — explains the New Customer page */}
              {tour === 6 && (
                <div style={{ position: 'absolute', top: '0', left: '100%', marginLeft: '20px', width: '230px', zIndex: 9999 }}>
                  <Coachmark
                    visible
                    title="One record for the relationship"
                    subtitle="Contact details, billing currency, payment terms, and portal access all live on this one customer record. Click Next to save."
                    onNext={() => { setCustomersAdded(true); gotoCustomers(); setTour(7); }}
                    top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next"
                  />
                </div>
              )}
            </div>
          </div>
          )}

          {/* Quotes */}
          {showQuotes && !showNewQuote && !quotesAdded && (
          <div style={{ position: 'relative', height: '100%', overflowY: 'auto', overflowX: 'hidden', padding: '20px 26px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
              <span style={{ fontSize: '17px', fontWeight: 800 }}>All Quotes</span>
              <button onClick={() => { setShowNewQuote(true); if (tour === 8) setTour(9); }} style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '9px 18px', borderRadius: '8px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}><Plus size={12} /> New</button>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a', marginBottom: '5px' }}>Seal the deal.</div>
              <div style={{ fontSize: '11px', color: '#888', marginBottom: '20px' }}>With quotes, give your customers an offer they can&apos;t refuse!</div>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <button onClick={() => { setShowNewQuote(true); if (tour === 8) setTour(9); }} style={{ padding: '11px 26px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.03em', cursor: 'pointer', textTransform: 'uppercase' }}>Create New Quote</button>

                {/* Coach mark — beside the CREATE NEW QUOTE button */}
                {tour === 8 && !showNewQuote && (
                  <div style={{ position: 'absolute', top: '-10px', left: '100%', marginLeft: '20px', zIndex: 9999 }}>
                    <Coachmark
                      visible
                      title="Turn interest into revenue"
                      subtitle="Send a quote, track its status, and convert it straight to an invoice the moment it's accepted. Click Next."
                      onNext={() => { setShowNewQuote(true); setTour(9); }}
                      top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next"
                    />
                  </div>
                )}
              </div>
              <div style={{ marginTop: '12px', fontSize: '10.5px', color: '#2563eb', fontWeight: 600 }}>Import Quotes</div>

              <div style={{ marginTop: '40px', fontSize: '9.5px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Life cycle of a Quote</div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', marginTop: '20px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '8px', border: '1.5px solid #059669', color: '#059669', fontSize: '10.5px', fontWeight: 700 }}><CheckCircle2 size={13} /> ACCEPT</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '8px', border: '1.5px solid #2563eb', color: '#2563eb', fontSize: '10.5px', fontWeight: 700 }}><FileText size={13} /> QUOTE</div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '8px', border: '1.5px solid #2563eb', color: '#2563eb', fontSize: '10.5px', fontWeight: 700 }}><Mail size={13} /> SENT TO CUSTOMER</div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '8px', border: '1.5px solid #2563eb', color: '#2563eb', fontSize: '10.5px', fontWeight: 700 }}><Receipt size={13} /> INVOICE</div>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '8px', border: '1.5px solid #dc2626', color: '#dc2626', fontSize: '10.5px', fontWeight: 700 }}><XCircle size={13} /> REJECT</div>
              </div>
            </div>
          </div>
          )}

          {/* Quotes — populated */}
          {showQuotes && !showNewQuote && quotesAdded && (
          <div style={{ position: 'relative', height: '100%', overflowY: 'auto', overflowX: 'hidden', padding: '20px 26px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '17px', fontWeight: 800 }}>All Quotes</span>
              <button style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '9px 18px', borderRadius: '8px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}><Plus size={12} /> New</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <input placeholder="Search in Quotes..." style={{ width: '220px', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              <div style={{ position: 'relative' }}>
                <select style={{ appearance: 'none', padding: '9px 30px 9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555' }}><option>Status</option></select>
                <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
              </div>
            </div>

            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 2fr 1.2fr 1.2fr 1fr', gap: '8px', padding: '11px 16px', borderBottom: '1px solid #eef0f2', fontSize: '8.5px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                <span>Quote#</span><span>Customer Name</span><span>Date</span><span>Amount</span><span>Status</span>
              </div>
              {QUOTES.map((q) => {
                const st = QUOTE_STATUS_STYLE[q.status];
                return (
                  <div key={q.num} style={{ display: 'grid', gridTemplateColumns: '1.1fr 2fr 1.2fr 1.2fr 1fr', gap: '8px', padding: '11px 16px', borderBottom: '1px solid #f6f6f8', alignItems: 'center', fontSize: '9.5px' }}>
                    <span style={{ fontWeight: 600, color: '#2563eb' }}>{q.num}</span>
                    <span style={{ color: '#1a1a1a' }}>{q.customer}</span>
                    <span style={{ color: '#666' }}>{q.date}</span>
                    <span style={{ color: '#666' }}>{q.amount}</span>
                    <span><span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '12px', fontSize: '8.5px', fontWeight: 700, color: st.color, background: st.bg }}>{q.status}</span></span>
                  </div>
                );
              })}
            </div>

            {/* Coach mark — explains the populated quotes list */}
            {tour === 10 && (
              <div style={{ position: 'absolute', top: '430px', left: '400px', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="Every quote, tracked to close"
                  subtitle="See status at a glance — Draft, Sent, Accepted, or already turned into an Invoice. Click Next to see invoices."
                  onNext={() => { gotoInvoices(); setTour(11); }}
                  top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Next"
                />
              </div>
            )}
          </div>
          )}

          {/* Invoices — empty state */}
          {showInvoices && !showNewInvoice && !invoicesAdded && (
          <div style={{ position: 'relative', height: '100%', overflowY: 'auto', overflowX: 'hidden', padding: '20px 26px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '17px', fontWeight: 800 }}>All Invoices <ChevronDown size={13} /></div>
              <button style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '9px 18px', borderRadius: '8px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}><Plus size={12} /> New</button>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a', marginBottom: '5px' }}>It&apos;s time to get paid!</div>
              <div style={{ fontSize: '11px', color: '#888', marginBottom: '20px', maxWidth: '420px', marginLeft: 'auto', marginRight: 'auto' }}>We don&apos;t want to boast too much, but sending amazing invoices and getting paid is easier than ever. Go ahead! Try it yourself.</div>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'relative' }}>
                  <button onClick={() => { setShowNewInvoice(true); if (tour === 11) setTour(12); }} style={{ padding: '11px 22px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.03em', cursor: 'pointer', textTransform: 'uppercase' }}>New Invoice</button>

                  {/* Coach mark — beside the NEW INVOICE button */}
                  {tour === 11 && !showNewInvoice && (
                    <div style={{ position: 'absolute', top: '-10px', left: '100%', marginLeft: '20px', zIndex: 9999 }}>
                      <Coachmark
                        visible
                        title="Send it, get paid"
                        subtitle="Create a professional invoice, send it in seconds, and collect payment online. Click Next."
                        onNext={() => { setShowNewInvoice(true); setTour(12); }}
                        top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next"
                      />
                    </div>
                  )}
                </div>
                <button style={{ padding: '11px 22px', background: '#fff', color: '#1a1a1a', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.03em', cursor: 'pointer', textTransform: 'uppercase' }}>New Recurring Invoice</button>
              </div>
              <div style={{ marginTop: '12px', fontSize: '10.5px', color: '#2563eb', fontWeight: 600 }}>Import Invoices</div>

              <div style={{ marginTop: '40px', fontSize: '9.5px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Life cycle of an Invoice</div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '8px', border: '1.5px solid #2563eb', color: '#2563eb', fontSize: '10.5px', fontWeight: 700 }}><FileText size={13} /> DRAFT</div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '8px', border: '1.5px solid #059669', color: '#059669', fontSize: '10.5px', fontWeight: 700 }}><CheckCircle2 size={13} /> SENT</div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '8px', border: '1.5px solid #2563eb', color: '#2563eb', fontSize: '10.5px', fontWeight: 700 }}><Receipt size={13} /> UNPAID</div>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '8px', border: '1.5px solid #dc2626', color: '#dc2626', fontSize: '10.5px', fontWeight: 700 }}><XCircle size={13} /> OVERDUE</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '8px', border: '1.5px solid #d97706', color: '#d97706', fontSize: '10.5px', fontWeight: 700 }}>PARTIALLY PAID</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', borderRadius: '8px', border: '1.5px solid #059669', color: '#059669', fontSize: '10.5px', fontWeight: 700 }}>PAID</div>
              </div>
            </div>
          </div>
          )}

          {/* Invoices — populated */}
          {showInvoices && !showNewInvoice && invoicesAdded && (
          <div style={{ position: 'relative', height: '100%', overflowY: 'auto', overflowX: 'hidden', padding: '20px 26px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '17px', fontWeight: 800 }}>All Invoices <ChevronDown size={13} /></div>
              <button style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '9px 18px', borderRadius: '8px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}><Plus size={12} /> New</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <input placeholder="Search in Invoices..." style={{ width: '220px', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              <div style={{ position: 'relative' }}>
                <select style={{ appearance: 'none', padding: '9px 30px 9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555' }}><option>Status</option></select>
                <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
              </div>
            </div>

            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr 1fr 1fr 1.1fr 1.1fr', gap: '8px', padding: '11px 16px', borderBottom: '1px solid #eef0f2', fontSize: '8.5px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                <span>Invoice#</span><span>Customer Name</span><span>Invoice Date</span><span>Due Date</span><span>Amount</span><span>Status</span>
              </div>
              {INVOICES.map((inv) => {
                const st = INVOICE_STATUS_STYLE[inv.status];
                return (
                  <div key={inv.num} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr 1fr 1fr 1.1fr 1.1fr', gap: '8px', padding: '11px 16px', borderBottom: '1px solid #f6f6f8', alignItems: 'center', fontSize: '9.5px' }}>
                    <span style={{ fontWeight: 600, color: '#2563eb' }}>{inv.num}</span>
                    <span style={{ color: '#1a1a1a' }}>{inv.customer}</span>
                    <span style={{ color: '#666' }}>{inv.date}</span>
                    <span style={{ color: '#666' }}>{inv.due}</span>
                    <span style={{ color: '#666' }}>{inv.amount}</span>
                    <span><span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '12px', fontSize: '8.5px', fontWeight: 700, color: st.color, background: st.bg }}>{inv.status}</span></span>
                  </div>
                );
              })}
            </div>

            {/* Coach mark — explains the populated invoices list */}
            {tour === 13 && (
              <div style={{ position: 'absolute', top: '460px', left: '400px', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="Get paid, faster"
                  subtitle="Track Draft, Sent, Unpaid, Overdue, and Paid invoices in one place — and see exactly who owes you what. Click Next to see banking."
                  onNext={() => { gotoBanking(); setTour(14); }}
                  top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Next"
                />
              </div>
            )}
          </div>
          )}

          {/* Bank Accounts — empty state */}
          {showBanking && !showNewBankAccount && !bankAccountsAdded && (
          <div style={{ position: 'relative', height: '100%', overflowY: 'auto', overflowX: 'hidden', padding: '20px 26px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '17px', fontWeight: 800 }}>Bank Accounts</span>
              <button style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '9px 18px', borderRadius: '8px', background: '#2563eb', color: '#fff', border: 'none', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}><Plus size={12} /> Add Account</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
              <input placeholder="Search bank accounts..." style={{ width: '220px', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              <div style={{ position: 'relative' }}>
                <select style={{ appearance: 'none', padding: '9px 30px 9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555' }}><option>Status</option></select>
                <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
              </div>
              <div style={{ position: 'relative' }}>
                <select style={{ appearance: 'none', padding: '9px 30px 9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555' }}><option>Account Type</option></select>
                <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Landmark size={40} style={{ color: '#ccc', marginBottom: '16px' }} />
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#1a1a1a', marginBottom: '5px' }}>Set Up Your Bank Accounts</div>
              <div style={{ fontSize: '11px', color: '#888', marginBottom: '20px', maxWidth: '380px', marginLeft: 'auto', marginRight: 'auto' }}>Add your bank accounts to track balances, record transactions, and reconcile statements.</div>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <button onClick={() => { setShowNewBankAccount(true); if (tour === 14) setTour(15); }} style={{ padding: '11px 22px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '10.5px', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}><Plus size={12} /> Add Bank Account</button>

                {/* Coach mark — beside the Add Bank Account button */}
                {tour === 14 && !showNewBankAccount && (
                  <div style={{ position: 'absolute', top: '-10px', left: '100%', marginLeft: '20px', zIndex: 9999 }}>
                    <Coachmark
                      visible
                      title="Know your cash position"
                      subtitle="Connect every bank and card account so balances and transactions stay in sync with your books. Click Next."
                      onNext={() => { setShowNewBankAccount(true); setTour(15); }}
                      top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          )}

          {/* Add Bank Account form */}
          {showNewBankAccount && (
          <div style={{ position: 'relative', height: '100%', overflowY: 'auto', overflowX: 'hidden', padding: '20px 26px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
              <span style={{ fontSize: '16px', fontWeight: 800 }}>Add Bank Account</span>
            </div>

            <div style={{ maxWidth: '640px', position: 'relative', marginBottom: '20px' }}>
              <div style={{ background: '#fff', borderRadius: '10px', border: '1px solid #eef0f2', padding: '18px', marginBottom: '16px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, marginBottom: '14px' }}>Account Details</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '12px' }}>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Account Name *</div>
                    <input placeholder="e.g. GTBank Current Account" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Bank Name</div>
                    <input placeholder="e.g. GTBank" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '12px' }}>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Account Number</div>
                    <input placeholder="e.g. 0123456789" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Routing/Sort Code</div>
                    <input placeholder="e.g. 058" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Account Type *</div>
                    <select style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555', boxSizing: 'border-box' }}><option>Checking</option></select>
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Currency</div>
                    <input defaultValue="GBP" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                </div>
              </div>

              <div style={{ background: '#fff', borderRadius: '10px', border: '1px solid #eef0f2', padding: '18px', marginBottom: '20px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, marginBottom: '14px' }}>Financial Details</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '12px' }}>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Opening Balance</div>
                    <input defaultValue="0" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Chart of Account (Asset) *</div>
                    <select style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#999', boxSizing: 'border-box' }}><option>Select account</option></select>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Description</div>
                  <input placeholder="Optional description" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px' }}>
                <span onClick={() => setShowNewBankAccount(false)} style={{ padding: '9px 20px', background: '#fff', color: '#1a1a1a', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}>Cancel</span>
                <button onClick={() => { setBankAccountsAdded(true); gotoBanking(); if (tour === 15) setTour(16); }} style={{ padding: '9px 20px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}>Save Account</button>
              </div>

              {/* Coach mark — explains the Add Bank Account page */}
              {tour === 15 && (
                <div style={{ position: 'absolute', top: '0', left: '100%', marginLeft: '20px', width: '230px', zIndex: 9999 }}>
                  <Coachmark
                    visible
                    title="Set the opening balance once"
                    subtitle="Link the right chart-of-account and Books keeps this balance reconciled against every transaction from here on. Click Next to save."
                    onNext={() => { setBankAccountsAdded(true); gotoBanking(); setTour(16); }}
                    top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next"
                  />
                </div>
              )}
            </div>
          </div>
          )}

          {/* Bank Accounts — populated */}
          {showBanking && !showNewBankAccount && bankAccountsAdded && (
          <div style={{ position: 'relative', height: '100%', overflowY: 'auto', overflowX: 'hidden', padding: '20px 26px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', marginBottom: '20px' }}>
              <div style={{ background: '#fff', borderRadius: '10px', border: '1px solid #eef0f2', padding: '14px 16px' }}>
                <div style={{ fontSize: '9.5px', color: '#999', marginBottom: '6px' }}>Total Balance</div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#059669' }}>£67,880.00</div>
              </div>
              <div style={{ background: '#fff', borderRadius: '10px', border: '1px solid #eef0f2', padding: '14px 16px' }}>
                <div style={{ fontSize: '9.5px', color: '#999', marginBottom: '6px' }}>Active Accounts</div>
                <div style={{ fontSize: '15px', fontWeight: 800 }}>4</div>
              </div>
              <div style={{ background: '#fff', borderRadius: '10px', border: '1px solid #eef0f2', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '9.5px', color: '#999', marginBottom: '6px' }}>Quick Actions</div>
                  <div style={{ fontSize: '11px', fontWeight: 700 }}>Transfer, Reconcile</div>
                </div>
                <button style={{ padding: '7px 12px', background: '#fff', border: '1px solid #e5e5e5', borderRadius: '7px', fontSize: '9.5px', fontWeight: 600, color: '#555', cursor: 'pointer' }}>View Transactions</button>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '17px', fontWeight: 800 }}>Bank Accounts</span>
              <button style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '9px 18px', borderRadius: '8px', background: '#2563eb', color: '#fff', border: 'none', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}><Plus size={12} /> Add Account</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <input placeholder="Search bank accounts..." style={{ width: '220px', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              <div style={{ position: 'relative' }}>
                <select style={{ appearance: 'none', padding: '9px 30px 9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555' }}><option>Status</option></select>
                <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
              </div>
              <div style={{ position: 'relative' }}>
                <select style={{ appearance: 'none', padding: '9px 30px 9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555' }}><option>Account Type</option></select>
                <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
              </div>
            </div>

            <div style={{ background: '#fff', borderRadius: '12px', border: '1px solid #eef0f2', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1.2fr 1.4fr 1fr', gap: '8px', padding: '11px 16px', borderBottom: '1px solid #eef0f2', fontSize: '8.5px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                <span>Account Name</span><span>Type</span><span>Account #</span><span>Balance</span><span>Status</span>
              </div>
              {BANK_ACCOUNTS.map((acc) => {
                const st = BANK_STATUS_STYLE[acc.status];
                return (
                  <div key={acc.name} style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1.2fr 1.4fr 1fr', gap: '8px', padding: '11px 16px', borderBottom: '1px solid #f6f6f8', alignItems: 'center', fontSize: '9.5px' }}>
                    <span>
                      <span style={{ display: 'block', fontWeight: 600, color: '#1a1a1a' }}>{acc.name}</span>
                      <span style={{ display: 'block', color: '#999', fontSize: '8.5px' }}>{acc.bank}</span>
                    </span>
                    <span style={{ color: '#666' }}>{acc.type}</span>
                    <span style={{ color: '#666' }}>{acc.number}</span>
                    <span style={{ fontWeight: 700, color: '#059669' }}>{acc.balance}</span>
                    <span><span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '12px', fontSize: '8.5px', fontWeight: 700, color: st.color, background: st.bg }}>{acc.status}</span></span>
                  </div>
                );
              })}
            </div>

            {/* Coach mark — final step, explains the populated bank accounts list */}
            {tour === 16 && (
              <div style={{ position: 'absolute', top: '430px', left: '400px', zIndex: 9999 }}>
                <Coachmark
                  visible
                  title="One place for every account"
                  subtitle="Multiple banks, multiple currencies — balances stay reconciled automatically as transactions come in. That's the Books tour!"
                  onNext={() => { setTour(0); onEnd?.(); }}
                  top="0" left="0" arrowSide="top" arrowOffset="24px" buttonLabel="Done"
                />
              </div>
            )}
          </div>
          )}

          {/* New Quote page */}
          {showNewQuote && (
          <div style={{ position: 'relative', height: '100%', overflowY: 'auto', overflowX: 'hidden', padding: '20px 26px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
              <span style={{ fontSize: '16px', fontWeight: 800 }}>New Quote</span>
              <X size={16} style={{ marginLeft: 'auto', color: '#aaa', cursor: 'pointer' }} onClick={() => setShowNewQuote(false)} />
            </div>

            <div style={{ maxWidth: '640px', position: 'relative', marginBottom: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '12px' }}>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#dc2626', marginBottom: '5px' }}>Customer Name*</div>
                  <select style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#999', boxSizing: 'border-box' }}><option>Select or add a customer</option></select>
                </div>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#dc2626', marginBottom: '5px' }}>Quote#*</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input defaultValue="QT-000001" style={{ flex: 1, padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
                    <Settings size={14} style={{ color: '#aaa' }} />
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Reference#</div>
                <input style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '12px' }}>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#dc2626', marginBottom: '5px' }}>Quote Date*</div>
                  <input type="date" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#999', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Expiry Date</div>
                  <input type="date" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#999', boxSizing: 'border-box' }} />
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Salesperson</div>
                <select style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#999', boxSizing: 'border-box' }}><option>Select or Add Salesperson</option></select>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Subject</div>
                <input placeholder="Let your customer know what this Quote is for" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              </div>

              <div style={{ fontSize: '12px', fontWeight: 700, marginBottom: '12px', marginTop: '20px' }}>Item Table</div>
              <div style={{ background: '#fff', borderRadius: '10px', border: '1px solid #eef0f2', overflow: 'hidden', marginBottom: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 0.7fr 0.7fr 1fr 0.9fr', gap: '8px', padding: '10px 14px', borderBottom: '1px solid #eef0f2', fontSize: '8.5px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  <span>Item Details</span><span>Quantity</span><span>Rate</span><span>Tax</span><span style={{ textAlign: 'right' }}>Amount</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 0.7fr 0.7fr 1fr 0.9fr', gap: '8px', padding: '11px 14px', alignItems: 'center', fontSize: '9.5px' }}>
                  <span style={{ color: '#bbb' }}>Type or click to select an item.</span>
                  <span style={{ color: '#666' }}>1</span>
                  <span style={{ color: '#666' }}>0</span>
                  <span style={{ color: '#999' }}>Select a Tax</span>
                  <span style={{ textAlign: 'right', color: '#666' }}>0.00</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 14px', fontSize: '10px', color: '#2563eb', fontWeight: 600, borderTop: '1px solid #f6f6f8' }}>
                  <span>+ Add New Row</span><span style={{ color: '#ccc' }}>|</span><span>Add Items in Bulk</span>
                </div>
              </div>

              <div style={{ marginLeft: 'auto', maxWidth: '260px', fontSize: '10.5px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}><span style={{ color: '#666' }}>Sub Total</span><span style={{ fontWeight: 700 }}>0.00</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}><span style={{ color: '#666' }}>Discount</span><span style={{ fontWeight: 700 }}>0.00</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ color: '#666' }}>Shipping Charges</span><span style={{ fontWeight: 700 }}>0.00</span></div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #f0f0f2', paddingTop: '16px', marginTop: '20px' }}>
                <button onClick={() => { setQuotesAdded(true); gotoQuotes(); if (tour === 9) setTour(10); }} style={{ padding: '9px 22px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}>Save</button>
                <span onClick={() => setShowNewQuote(false)} style={{ fontSize: '10px', color: '#888', cursor: 'pointer' }}>Cancel</span>
              </div>

              {/* Coach mark — explains the New Quote page */}
              {tour === 9 && (
                <div style={{ position: 'absolute', top: '0', left: '100%', marginLeft: '20px', width: '230px', zIndex: 9999 }}>
                  <Coachmark
                    visible
                    title="Build the quote line by line"
                    subtitle="Add items, quantities, and tax — totals calculate automatically, and one click turns this into an invoice later. Click Next to save."
                    onNext={() => { setQuotesAdded(true); gotoQuotes(); setTour(10); }}
                    top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next"
                  />
                </div>
              )}
            </div>
          </div>
          )}

          {/* New Invoice page */}
          {showNewInvoice && (
          <div style={{ position: 'relative', height: '100%', overflowY: 'auto', overflowX: 'hidden', padding: '20px 26px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
              <span style={{ fontSize: '16px', fontWeight: 800 }}>New Invoice</span>
              <X size={16} style={{ marginLeft: 'auto', color: '#aaa', cursor: 'pointer' }} onClick={() => setShowNewInvoice(false)} />
            </div>

            <div style={{ maxWidth: '640px', position: 'relative', marginBottom: '20px' }}>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#dc2626', marginBottom: '5px' }}>Customer Name*</div>
                <select style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#999', boxSizing: 'border-box' }}><option>Select or add a customer</option></select>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#dc2626', marginBottom: '5px' }}>Invoice#*</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input defaultValue="INV-000001" style={{ flex: 1, padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
                  <Settings size={14} style={{ color: '#aaa' }} />
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Order Number</div>
                <input style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '12px' }}>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#dc2626', marginBottom: '5px' }}>Invoice Date*</div>
                  <input type="date" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#999', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Terms</div>
                  <select style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555', boxSizing: 'border-box' }}><option>Due on Receipt</option></select>
                </div>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Due Date</div>
                  <input type="date" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#999', boxSizing: 'border-box' }} />
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Accounts Receivable</div>
                <select style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555', boxSizing: 'border-box' }}><option>Accounts Receivable</option></select>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Salesperson</div>
                <select style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#999', boxSizing: 'border-box' }}><option>Select or Add Salesperson</option></select>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Subject</div>
                <input placeholder="Let your customer know what this invoice is for" style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
              </div>

              <div style={{ fontSize: '12px', fontWeight: 700, marginBottom: '12px', marginTop: '20px' }}>Item Table</div>
              <div style={{ background: '#fff', borderRadius: '10px', border: '1px solid #eef0f2', overflow: 'hidden', marginBottom: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 0.7fr 0.7fr 1fr 0.9fr', gap: '8px', padding: '10px 14px', borderBottom: '1px solid #eef0f2', fontSize: '8.5px', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  <span>Item Details</span><span>Quantity</span><span>Rate</span><span>Tax</span><span style={{ textAlign: 'right' }}>Amount</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 0.7fr 0.7fr 1fr 0.9fr', gap: '8px', padding: '11px 14px', alignItems: 'center', fontSize: '9.5px' }}>
                  <span style={{ color: '#bbb' }}>Type or click to select an item.</span>
                  <span style={{ color: '#666' }}>1</span>
                  <span style={{ color: '#666' }}>0</span>
                  <span style={{ color: '#999' }}>Select a Tax</span>
                  <span style={{ textAlign: 'right', color: '#666' }}>0.00</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 14px', fontSize: '10px', color: '#2563eb', fontWeight: 600, borderTop: '1px solid #f6f6f8' }}>
                  <span>Scan Item</span><span style={{ color: '#ccc' }}>|</span><span>Bulk Actions</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '-10px', marginBottom: '20px', fontSize: '10px', color: '#2563eb', fontWeight: 600 }}>
                <span>+ Add New Row</span><span style={{ color: '#ccc' }}>|</span><span>Add Items in Bulk</span>
              </div>

              <div style={{ marginLeft: 'auto', maxWidth: '260px', fontSize: '10.5px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}><span style={{ color: '#666' }}>Sub Total</span><span style={{ fontWeight: 700 }}>0.00</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}><span style={{ color: '#666' }}>Discount</span><span style={{ fontWeight: 700 }}>0.00</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}><span style={{ color: '#666' }}>Shipping Charges</span><span style={{ fontWeight: 700 }}>0.00</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}><span style={{ color: '#666' }}>Adjustment</span><span style={{ fontWeight: 700 }}>0.00</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eef0f2', paddingTop: '10px' }}><span style={{ fontWeight: 700 }}>Total (GBP)</span><span style={{ fontWeight: 800, color: '#2563eb' }}>0.00</span></div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '20px', marginBottom: '18px' }}>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Customer Notes</div>
                  <textarea rows={2} defaultValue="Thanks for your business." style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box', resize: 'none', fontFamily: 'inherit' }} />
                </div>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Attach File(s) to Invoice</div>
                  <button style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 14px', background: '#fff', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '10px', fontWeight: 600, color: '#555', cursor: 'pointer' }}>Upload File</button>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #f0f0f2', paddingTop: '16px' }}>
                <button style={{ padding: '9px 20px', background: '#fff', color: '#1a1a1a', border: '1px solid #e5e5e5', borderRadius: '8px', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}>Save as Draft</button>
                <button onClick={() => { setInvoicesAdded(true); gotoInvoices(); if (tour === 12) setTour(13); }} style={{ padding: '9px 20px', background: 'linear-gradient(135deg, #7C3AED, #a855f7)', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}>Save and Send</button>
                <span onClick={() => setShowNewInvoice(false)} style={{ fontSize: '10px', color: '#888', cursor: 'pointer' }}>Cancel</span>
              </div>

              {/* Coach mark — explains the New Invoice page */}
              {tour === 12 && (
                <div style={{ position: 'absolute', top: '0', left: '100%', marginLeft: '20px', width: '230px', zIndex: 9999 }}>
                  <Coachmark
                    visible
                    title="Bill it, brand it, collect it"
                    subtitle="Pull in items from your catalog, attach files, and send — or enable online payments so customers can pay in one click. Click Next to save."
                    onNext={() => { setInvoicesAdded(true); gotoInvoices(); setTour(13); }}
                    top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next"
                  />
                </div>
              )}
            </div>
          </div>
          )}

          {/* New Item page */}
          {showNewItem && (
          <div style={{ position: 'relative', height: '100%', overflowY: 'auto', overflowX: 'hidden', padding: '20px 26px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
              <span style={{ fontSize: '16px', fontWeight: 800 }}>New Item</span>
              <X size={16} style={{ marginLeft: 'auto', color: '#aaa', cursor: 'pointer' }} onClick={() => setShowNewItem(false)} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '20px', marginBottom: '18px' }}>
              <div>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#dc2626', marginBottom: '5px' }}>Name*</div>
                  <input style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 600, color: '#333', width: '46px' }}>Type</span>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', color: '#333' }}><span style={{ width: '13px', height: '13px', borderRadius: '50%', border: '4.5px solid #2563eb', display: 'inline-block' }} /> Goods</label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', color: '#333' }}><span style={{ width: '13px', height: '13px', borderRadius: '50%', border: '1.5px solid #ccc', display: 'inline-block' }} /> Service</label>
                </div>
                <div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Unit</div>
                  <div style={{ position: 'relative' }}>
                    <select style={{ appearance: 'none', width: '100%', padding: '9px 30px 9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#999', boxSizing: 'border-box' }}><option>Select or type to add</option></select>
                    <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
                  </div>
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ border: '1.5px dashed #dcdfe4', borderRadius: '10px', height: '128px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#999' }}>
                  <ImagePlus size={22} style={{ color: '#bbb', marginBottom: '8px' }} />
                  <div style={{ fontSize: '9.5px' }}>Drag image(s) here or</div>
                  <div style={{ fontSize: '9.5px', color: '#2563eb', fontWeight: 600 }}>Browse images</div>
                </div>

                {/* Coach mark — explains the New Item page */}
                {tour === 3 && (
                  <div style={{ position: 'absolute', top: '138px', left: '-160px', zIndex: 9999 }}>
                    <Coachmark
                      visible
                      title="One record, both sides"
                      subtitle="Set your selling price and cost price together — Books tracks margin automatically and posts to the right accounts. Click Next to save."
                      onNext={() => { setItemsAdded(true); setShowNewItem(false); setTour(4); }}
                      top="0" left="0" arrowSide="top" arrowOffset="30px" buttonLabel="Next"
                    />
                  </div>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '3px', background: '#2563eb', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: '7px', height: '4px', borderLeft: '1.5px solid #fff', borderBottom: '1.5px solid #fff', transform: 'rotate(-45deg) translateY(-1px)' }} /></span>
              <span style={{ fontSize: '11px', fontWeight: 700 }}>Sales Information</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '18px' }}>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#dc2626', marginBottom: '5px' }}>Selling Price*</div>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
                  <span style={{ padding: '9px 10px', background: '#f8f8fa', color: '#999', fontSize: '10px', borderRight: '1px solid #eee' }}>GBP</span>
                  <input style={{ flex: 1, padding: '9px 10px', border: 'none', outline: 'none', fontSize: '10.5px' }} />
                </div>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', margin: '12px 0 5px' }}>Description</div>
                <textarea rows={2} style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box', resize: 'none', fontFamily: 'inherit' }} />
              </div>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#dc2626', marginBottom: '5px' }}>Account*</div>
                <div style={{ position: 'relative' }}>
                  <select style={{ appearance: 'none', width: '100%', padding: '9px 30px 9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555', boxSizing: 'border-box' }}><option>Sales</option></select>
                  <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
                </div>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', margin: '12px 0 5px' }}>Tax</div>
                <div style={{ position: 'relative' }}>
                  <select style={{ appearance: 'none', width: '100%', padding: '9px 30px 9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#999', boxSizing: 'border-box' }}><option>Select a Tax</option></select>
                  <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '3px', background: '#2563eb', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: '7px', height: '4px', borderLeft: '1.5px solid #fff', borderBottom: '1.5px solid #fff', transform: 'rotate(-45deg) translateY(-1px)' }} /></span>
              <span style={{ fontSize: '11px', fontWeight: 700 }}>Purchase Information</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#dc2626', marginBottom: '5px' }}>Cost Price*</div>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
                  <span style={{ padding: '9px 10px', background: '#f8f8fa', color: '#999', fontSize: '10px', borderRight: '1px solid #eee' }}>GBP</span>
                  <input style={{ flex: 1, padding: '9px 10px', border: 'none', outline: 'none', fontSize: '10.5px' }} />
                </div>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', margin: '12px 0 5px' }}>Description</div>
                <textarea rows={2} style={{ width: '100%', padding: '9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', outline: 'none', boxSizing: 'border-box', resize: 'none', fontFamily: 'inherit' }} />
              </div>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#dc2626', marginBottom: '5px' }}>Account*</div>
                <div style={{ position: 'relative' }}>
                  <select style={{ appearance: 'none', width: '100%', padding: '9px 30px 9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#555', boxSizing: 'border-box' }}><option>Cost of Goods Sold</option></select>
                  <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
                </div>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', margin: '12px 0 5px' }}>Tax</div>
                <div style={{ position: 'relative', marginBottom: '12px' }}>
                  <select style={{ appearance: 'none', width: '100%', padding: '9px 30px 9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#999', boxSizing: 'border-box' }}><option>Select a Tax</option></select>
                  <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
                </div>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>Preferred Vendor</div>
                <div style={{ position: 'relative' }}>
                  <select style={{ appearance: 'none', width: '100%', padding: '9px 30px 9px 12px', border: '1px solid #eee', borderRadius: '8px', fontSize: '10.5px', color: '#999', boxSizing: 'border-box' }}><option></option></select>
                  <ChevronDown size={12} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', pointerEvents: 'none' }} />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #f0f0f2', paddingTop: '16px' }}>
              <button onClick={() => { setItemsAdded(true); setShowNewItem(false); if (tour === 3) setTour(4); }} style={{ padding: '9px 22px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}>Save</button>
              <span onClick={() => setShowNewItem(false)} style={{ fontSize: '10px', color: '#888', cursor: 'pointer' }}>Cancel</span>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
