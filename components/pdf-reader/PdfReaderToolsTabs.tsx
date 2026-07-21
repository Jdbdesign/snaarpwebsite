'use client';

import { useState } from 'react';
import {
  Pencil, Minimize2, SplitSquareHorizontal, Merge, Highlighter, FileOutput, FileMinus,
  FormInput, RotateCw, FilePlus, LayoutGrid, Signature, Lock, ScanText, FileType,
  Crop, Languages, Unlock, Droplet, Images, ImageUp, BookOpenText, QrCode,
  AudioLines, Video, FileText, Sheet, FileImage, FileCode, FileArchive,
  type LucideIcon,
} from 'lucide-react';
import { PdfReaderRevealSection } from './PdfReaderRevealSection';

interface Tool {
  name: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

interface Category {
  id: string;
  label: string;
  tools: Omit<Tool, 'icon' | 'color' | 'bg'>[];
}

// Small pastel badge palette, cycled by index — mirrors the colour variety
// in the reference tool grid without hand-assigning one per tool.
const PALETTE = [
  { color: '#C0344E', bg: '#FDE8EA' },
  { color: '#3B82F6', bg: '#E6F0FE' },
  { color: '#DB2777', bg: '#FCE7F3' },
  { color: '#D97706', bg: '#FEF3E2' },
  { color: '#0E9384', bg: '#E7F8F0' },
  { color: '#7C3AED', bg: '#EDE9FE' },
];

// Best-effort icon lookup by keyword in the tool name, falling back to a
// plain document glyph — keeps the data list below just names + categories.
function iconFor(name: string): LucideIcon {
  const n = name.toLowerCase();
  if (n.includes('translator')) return Languages;
  if (n.includes('summarizer')) return BookOpenText;
  if (n.includes('qr code')) return QrCode;
  if (n.includes('transcribe audio') || n.includes('audio converter')) return AudioLines;
  if (n.includes('transcribe video') || n.includes('video converter') || n.includes('compress video')) return Video;
  if (n.includes('watermark')) return Droplet;
  if (n.includes('merge image')) return Images;
  if (n.includes('compress image') || n.includes('enhance image')) return ImageUp;
  if (n.includes('unlock')) return Unlock;
  if (n.includes('password')) return Lock;
  if (n.includes('ocr') || n.includes('image to text')) return ScanText;
  if (n.includes('crop')) return Crop;
  if (n.includes('sign')) return Signature;
  if (n.includes('organize')) return LayoutGrid;
  if (n.includes('fill')) return FormInput;
  if (n.includes('create')) return FilePlus;
  if (n.includes('rotate')) return RotateCw;
  if (n.includes('delete')) return FileMinus;
  if (n.includes('extract')) return FileOutput;
  if (n.includes('annotate')) return Highlighter;
  if (n.includes('merge')) return Merge;
  if (n.includes('split')) return SplitSquareHorizontal;
  if (n.includes('compress')) return Minimize2;
  if (n.includes('edit')) return Pencil;
  if (n.includes('excel') || n.includes('sheet') || n.includes('csv')) return Sheet;
  if (n.includes('html') || n.includes('svg') || n.includes('dxf') || n.includes('dwg')) return FileCode;
  if (n.includes('jpg') || n.includes('png') || n.includes('webp') || n.includes('image') || n.includes('heic') || n.includes('avif') || n.includes('gif')) return FileImage;
  if (n.includes('mobi') || n.includes('epub') || n.includes('azw3') || n.includes('cbr')) return FileArchive;
  if (n.includes('pdf')) return FileType;
  return FileText;
}

const CATEGORIES: Category[] = [
  {
    id: 'edit-sign',
    label: 'Edit & Sign',
    tools: [
      { name: 'Edit PDF' }, { name: 'Compress PDF' }, { name: 'Split PDF' }, { name: 'Merge PDF' }, { name: 'Annotate PDF' },
      { name: 'Extract PDF Pages' }, { name: 'Delete PDF Pages' }, { name: 'Fill PDF' }, { name: 'Rotate PDF' }, { name: 'Create PDF' },
      { name: 'Organize PDF' }, { name: 'Sign PDF' }, { name: 'Password Protect PDF' }, { name: 'OCR PDF' }, { name: 'Image to Text' },
      { name: 'Book Summarizer' }, { name: 'PDF Summarizer' }, { name: 'Crop PDF' }, { name: 'Translate PDF' }, { name: 'Unlock PDF' },
      { name: 'Remove Watermark' }, { name: 'Merge Images' }, { name: 'Compress Images' }, { name: 'Enhance Image' }, { name: 'German to English Translator' },
      { name: 'English to Spanish Translator' }, { name: 'Arabic to English Translator' }, { name: 'Japanese to English Translator' }, { name: 'QR Code Generator' }, { name: 'Transcribe Audio to Text' },
      { name: 'Transcribe Video to Text' }, { name: 'Compress Video' },
    ],
  },
  {
    id: 'convert-from-pdf',
    label: 'Convert from PDF',
    tools: [
      { name: 'PDF Converter' }, { name: 'PDF to Word' }, { name: 'PDF to JPG' }, { name: 'PDF to PNG' }, { name: 'PDF to Excel' },
      { name: 'PDF to EPUB' }, { name: 'PDF to PPTX' }, { name: 'PDF to Image' }, { name: 'PDF to DOCX' }, { name: 'PDF to HTML' },
      { name: 'PDF to TIFF' }, { name: 'PDF to MOBI' }, { name: 'PDF to SVG' }, { name: 'PDF to AZW3' }, { name: 'PDF to Text' },
      { name: 'PDF to DXF' }, { name: 'PDF to WebP' }, { name: 'PDF to EPS' },
    ],
  },
  {
    id: 'convert-to-pdf',
    label: 'Convert to PDF',
    tools: [
      { name: 'PDF Converter' }, { name: 'Word to PDF' }, { name: 'JPG to PDF' }, { name: 'PNG to PDF' }, { name: 'Excel to PDF' },
      { name: 'EPUB to PDF' }, { name: 'PPTX to PDF' }, { name: 'Image to PDF' }, { name: 'DOCX to PDF' }, { name: 'HTML to PDF' },
      { name: 'TIFF to PDF' }, { name: 'MOBI to PDF' }, { name: 'SVG to PDF' }, { name: 'AZW3 to PDF' }, { name: 'CSV to PDF' },
      { name: 'DWG to PDF' }, { name: 'Text to PDF' }, { name: 'DXF to PDF' }, { name: 'DjVu to PDF' }, { name: 'WebP to PDF' },
      { name: 'EPS to PDF' }, { name: 'Avif to PDF' }, { name: 'Heic to PDF' }, { name: 'CBR to PDF' }, { name: 'RTF to PDF' },
      { name: 'XPS to PDF' },
    ],
  },
  {
    id: 'other-formats',
    label: 'Other formats',
    tools: [
      { name: 'Avif to JPG' }, { name: 'AVIF to PNG' }, { name: 'WEBP to PNG' }, { name: 'Epub to MOBI' }, { name: 'CSV to Excel' },
      { name: 'DWG to DXF' }, { name: 'GIF to JPG' }, { name: 'GIF to PNG' }, { name: 'JPEG to JPG' }, { name: 'Heic to JPG' },
      { name: 'Heic to PNG' }, { name: 'JPG to PNG' }, { name: 'PNG to JPG' }, { name: 'SVG to JPG' }, { name: 'WEBP to JPG' },
      { name: 'Word to JPG' }, { name: 'PNG to WEBP' }, { name: 'SVG to PNG' }, { name: 'Image to Text' }, { name: 'Audio Converter' },
      { name: 'Video Converter' }, { name: 'Ebook Converter' }, { name: 'Image Converter' }, { name: 'MP4 to MP3' }, { name: 'M4A to MP3' },
      { name: 'MP3 to WAV' }, { name: 'WAV to MP3' }, { name: 'MOV to MP4' }, { name: 'MKV to MP4' }, { name: 'WebM to MP4' },
      { name: 'MP4 to WAV' }, { name: 'AVI to MP4' }, { name: 'MOV to MP3' }, { name: 'MOV to WAV' }, { name: 'MKV to MOV' },
      { name: 'MP4 to AVI' }, { name: 'FLAC to MP3' }, { name: 'M4A to WAV' }, { name: 'OGG to MP3' }, { name: 'MP4 to WebM' },
      { name: 'MKV to MP3' },
    ],
  },
  {
    id: 'forms',
    label: 'Forms',
    tools: [
      { name: '1040' }, { name: '8962' }, { name: 'W-9' }, { name: 'W-7' },
    ],
  },
];

export function PdfReaderToolsTabs() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const active = CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0];

  return (
    <section style={{ background: '#F7F7F7', paddingTop: '92px', paddingBottom: '92px' }}>
      <PdfReaderRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-pdf-reveal="" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: '600', letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Everything you need on a PDF</span>
          <h2 className="pdf-reader-section-heading" style={{ margin: '14px 0 0', color: '#1B1730' }}>The PDF Reader That Does Everything Else, Too.</h2>
        </div>

        <div data-pdf-reveal="" data-pdf-reveal-delay="100" style={{ background: '#F7F7F7', borderRadius: '28px', border: '1px solid #EEEDF3', padding: '20px', boxShadow: '0 20px 44px -28px rgba(37,22,84,.18)' }}>
          {/* Tab bar */}
          <div
            role="tablist"
            aria-label="PDF tool categories"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: '#1B1730',
              borderRadius: '16px',
              padding: '8px',
              overflowX: 'auto',
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(cat.id)}
                  style={{
                    flex: '1 1 0',
                    minWidth: 'max-content',
                    padding: '12px 20px',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontSize: '14.5px',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                    transition: 'background .18s, color .18s',
                    background: isActive ? '#7C3AED' : 'transparent',
                    color: isActive ? '#fff' : '#B4AEC6',
                    boxShadow: isActive ? '0 10px 22px -10px rgba(124,58,237,.7)' : 'none',
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Tool grid */}
          <div
            role="tabpanel"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5,1fr)',
              gap: '16px',
              marginTop: '20px',
            }}
          >
            {active.tools.map((tool, i) => {
              const Icon = iconFor(tool.name);
              const swatch = PALETTE[i % PALETTE.length];
              return (
                <div
                  key={`${active.id}-${tool.name}-${i}`}
                  style={{
                    background: '#fff',
                    borderRadius: '16px',
                    border: '1px solid #EFEDF6',
                    padding: '22px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '12px',
                  }}
                >
                  <span
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '11px',
                      background: swatch.bg,
                      color: swatch.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    <Icon width={18} height={18} strokeWidth={2} />
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: '#3B3550', lineHeight: 1.35 }}>{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </PdfReaderRevealSection>
    </section>
  );
}
