export default function LabelInput({
  type = "text | email",
  labelName,
  inputName,
  namePlaceholder,
  formName,
  onChange,
}: {
  type: string;
  labelName: string;
  inputName: string;
  namePlaceholder: string;
  formName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
        {labelName}
      </label>
      <input
        type={type}
        name={inputName.toLowerCase().replace(/\s+/g, "-")}
        value={formName}
        onChange={onChange}
        required
        className="w-full px-4 py-3 input-dark transition-all focus:outline-none"
        placeholder={namePlaceholder}
      />
    </div>
  );
}
