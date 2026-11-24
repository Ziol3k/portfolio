import { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

import { translations } from '../../i18n/translations';
import type { Language } from '../../i18n/translations';

import './MosaicDemo.css';

interface MosaicDemoProps {
  language: Language;
}

const API_URL = (
  import.meta.env.VITE_MOSAIC_API_URL ||
  'http://localhost:18000'
).replace(/\/$/, '');

const MAX_FILE_SIZE = 8 * 1024 * 1024;

export function MosaicDemo({ language }: MosaicDemoProps) {
  const t = translations[language].mosaic;

  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Zwalniamy adresy wygenerowane dla plików w przeglądarce.
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  useEffect(() => {
    return () => {
      if (resultUrl) URL.revokeObjectURL(resultUrl);
    };
  }, [resultUrl]);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files?.[0];

    if (!selected) return;

    setError(null);

    if (!['image/jpeg', 'image/png'].includes(selected.type)) {
      setError(t.invalidFile);
      return;
    }

    if (selected.size > MAX_FILE_SIZE) {
      setError(t.tooLarge);
      return;
    }

    setFile(selected);
    setPreviewUrl(URL.createObjectURL(selected));
    setResultUrl(null);
  }

  async function handleGenerate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!file || loading) return;

    setLoading(true);
    setError(null);
    setResultUrl(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${API_URL}/api/mosaic`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);

        const message =
          typeof data?.detail === 'string'
            ? data.detail
            : t.error;

        throw new Error(message);
      }

      const resultBlob = await response.blob();
      const url = URL.createObjectURL(resultBlob);

      setResultUrl(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="mosaic-demo" className="mosaic-section">
      <div className="mosaic-heading">
        <p className="section-eyebrow">{t.eyebrow}</p>
        <h2>{t.title}</h2>
        <p>{t.description}</p>
      </div>

      <form onSubmit={handleGenerate} className="mosaic-controls">
        <label htmlFor="mosaic-file" className="mosaic-upload-label">
          {t.upload}
        </label>

        <input
          id="mosaic-file"
          type="file"
          accept="image/jpeg,image/png"
          onChange={handleFileChange}
          disabled={loading}
        />

        {file && (
          <span className="mosaic-filename">{file.name}</span>
        )}

        <button
          type="submit"
          className="mosaic-generate-button"
          disabled={!file || loading}
        >
          {loading ? t.generating : t.generate}
          <span aria-hidden="true"> ✳</span>
        </button>
      </form>

      {error && (
        <p className="mosaic-error" role="alert">
          {error}
        </p>
      )}

      <div className="mosaic-preview-grid">
        <div className="mosaic-preview">
          <h3>{t.original}</h3>

          <div className="mosaic-image-container">
            {previewUrl ? (
              <img src={previewUrl} alt={t.original} />
            ) : (
              <span>{t.upload}</span>
            )}
          </div>
        </div>

        <div className="mosaic-preview">
          <h3>{t.result}</h3>

          <div className="mosaic-image-container">
            {resultUrl ? (
              <img src={resultUrl} alt={t.imageAlt} />
            ) : (
              <span>
                {loading ? t.generating : t.empty}
              </span>
            )}
          </div>
        </div>
      </div>

      {resultUrl && (
        <div className="mosaic-download">
          <a href={resultUrl} download="mosaic.png">
            {t.download} ↓
          </a>
        </div>
      )}
    </section>
  );
}
