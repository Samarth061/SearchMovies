interface ErrorMessageProps {
  error: string;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className="text-center p-2 mb-2">
      <p className="text-semantic-text-secondary text-sm">
        Using fallback movies (API: {error})
      </p>
    </div>
  );
}