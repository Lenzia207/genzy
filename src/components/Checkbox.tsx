export default function Checkbox({
    privacyAccepted,
    onChange,
    message
}: {
    privacyAccepted: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    message: string;
}) {
    return (
        <div className="flex items-start space-x-3">
            <input
                type="checkbox"
                id="privacy-policy"
                checked={privacyAccepted}
                onChange={onChange}
                className="mt-1 w-4 h-4 rounded focus:ring-2"
                style={{ accentColor: "var(--accent-purple)" }}
                required
            />
            <label
                htmlFor="privacy-policy"
                className="text-sm cursor-pointer"
                style={{ color: "var(--text-secondary)" }}
            >
                {message}
            </label>
        </div>
    )
}