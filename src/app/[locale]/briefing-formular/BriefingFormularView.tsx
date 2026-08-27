"use client";

import TitleHeader from "@/components/TitleHeader";
import { BriefingFormData, BriefingFormState, CheckboxOption } from "./data/types/briefing-form-types";
import { FormEvent } from "react";
import { Send } from "lucide-react";
import InlineInput from "@/components/FormComponents/InlineInput";
import RadioGroup from "@/components/FormComponents/RadioGroup";
import CheckItem from "@/components/FormComponents/CheckItem";
import TextareaInput from "@/components/FormComponents/TextareaInput";
import TextInput from "@/components/FormComponents/TextInput";
import FieldGroup from "@/components/FormComponents/FieldGroup";
import SectionCard from "@/components/FormComponents/SectionCard";
import AppButton from "@/components/AppButton";

// ─── Prop types ──────────────────────────────────────────────────────────────

interface BriefingFormularViewProps {
    data: BriefingFormData;
    formState: BriefingFormState;
    isSubmitting: boolean;
    submitStatus: "success" | "error" | null;
    statusMessage: string;
    onTextChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onNestedCheck: <G extends keyof BriefingFormState>(group: G, key: string, checked: boolean) => void;
    onRadio: (name: keyof BriefingFormState, value: string) => void;
    onBoolCheck: (name: keyof BriefingFormState, checked: boolean) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

// ─── Generic mapped checklist ────────────────────────────────────────────────

/**
 * Renders a list of CheckItems from a CheckboxOption[] array.
 * onNestedCheck receives just (key, checked) — the caller binds the group via makeNestedCheck.
 */
function ChecklistGroup({
    options,
    groupValues,
    formState,
    onNestedCheck,
    onTextChange,
}: {
    options: CheckboxOption[];
    groupValues: Record<string, boolean>;
    formState: BriefingFormState;
    onNestedCheck: (key: string, checked: boolean) => void;
    onTextChange: BriefingFormularViewProps["onTextChange"];
}) {
    return (
        <FieldGroup>
            {options.map(opt => (
                <CheckItem
                    key={opt.key}
                    label={opt.label}
                    checked={!!groupValues[opt.key]}
                    onChange={v => onNestedCheck(opt.key, v)}
                >
                    {opt.inlineInputName && (
                        <InlineInput
                            name={opt.inlineInputName}
                            value={(formState as unknown as Record<string, string>)[opt.inlineInputName] ?? ""}
                            placeholder={opt.inlineInputPlaceholder}
                            onChange={onTextChange}
                        />
                    )}
                </CheckItem>
            ))}
        </FieldGroup>
    );
}

// ─── Main View ───────────────────────────────────────────────────────────────

export default function BriefingFormularView({
    data,
    formState,
    isSubmitting,
    submitStatus,
    statusMessage,
    onTextChange,
    onNestedCheck,
    onRadio,
    onBoolCheck,
    onSubmit,
}: BriefingFormularViewProps) {
    const f = formState;

    /** Binds the state group name so ChecklistGroup only needs (key, checked) */
    const makeNestedCheck = <G extends keyof BriefingFormState>(group: G) =>
        (key: string, checked: boolean) => onNestedCheck(group, key, checked);

    return (
        <div className="max-w-3xl mx-auto px-4 py-28 space-y-8">
            <TitleHeader as="h1" title={data.title} description={data.description} />

            <form onSubmit={onSubmit} className="space-y-6">

                {/* ── Client Info ── */}
                <SectionCard title={data.clientInfo.sectionTitle}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.clientInfo.fields.map(field => (
                            <TextInput
                                key={field.name}
                                label={field.label}
                                name={field.name}
                                value={(f as unknown as Record<string, string>)[field.name] ?? ""}
                                onChange={onTextChange}
                                required={field.required}
                            />
                        ))}
                    </div>
                </SectionCard>

                {/* ── Section 1 · Project Type ── */}
                <SectionCard title={data.section1.title}>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{data.section1.subtitle}</p>
                    <ChecklistGroup
                        options={data.section1.options}
                        groupValues={f.projectTypes}
                        formState={f}
                        onNestedCheck={makeNestedCheck("projectTypes")}
                        onTextChange={onTextChange}
                    />
                    <TextareaInput
                        label={data.section1.descriptionLabel}
                        name="projectDescription"
                        value={f.projectDescription}
                        onChange={onTextChange}
                        rows={3}
                    />
                </SectionCard>

                {/* ── Section 2 · Design & Branding ── */}
                <SectionCard title={data.section2.title}>
                    <ChecklistGroup
                        options={data.section2.options}
                        groupValues={f.design}
                        formState={f}
                        onNestedCheck={makeNestedCheck("design")}
                        onTextChange={onTextChange}
                    />
                    <TextInput label={data.section2.referencesLabel} name="referenceWebsites" value={f.referenceWebsites} onChange={onTextChange} />
                    <TextInput label={data.section2.styleLabel} name="styleWish" value={f.styleWish} placeholder="modern-minimalistisch / corporate / kreativ / ..." onChange={onTextChange} />
                </SectionCard>

                {/* ── Section 3 · Content & Texts ── */}
                <SectionCard title={data.section3.title}>
                    <ChecklistGroup
                        options={data.section3.options}
                        groupValues={f.content}
                        formState={f}
                        onNestedCheck={makeNestedCheck("content")}
                        onTextChange={onTextChange}
                    />
                    <TextInput label={data.section3.pagesLabel} name="requiredPages" value={f.requiredPages} placeholder="Startseite / Über uns / ..." onChange={onTextChange} />
                </SectionCard>

                {/* ── Section 4 · Features & Integrations ── */}
                <SectionCard title={data.section4.title}>
                    <ChecklistGroup
                        options={data.section4.options}
                        groupValues={f.features}
                        formState={f}
                        onNestedCheck={makeNestedCheck("features")}
                        onTextChange={onTextChange}
                    />
                </SectionCard>

                {/* ── Section 5 · Domain & Hosting ── */}
                <SectionCard title={data.section5.title}>
                    <ChecklistGroup
                        options={data.section5.options}
                        groupValues={f.hosting}
                        formState={f}
                        onNestedCheck={makeNestedCheck("hosting")}
                        onTextChange={onTextChange}
                    />
                </SectionCard>

                {/* ── Section 6 · Existing Website ── */}
                <SectionCard title={data.section6.title}>
                    <ChecklistGroup
                        options={data.section6.options}
                        groupValues={f.existing}
                        formState={f}
                        onNestedCheck={makeNestedCheck("existing")}
                        onTextChange={onTextChange}
                    />
                    <TextInput label={data.section6.accessesLabel} name="accessesNeeded" value={f.accessesNeeded} placeholder="Domain / Hosting / CMS / ..." onChange={onTextChange} />
                </SectionCard>

                {/* ── Section 7 · SEO & Marketing ── */}
                <SectionCard title={data.section7.title}>
                    <ChecklistGroup
                        options={data.section7.options}
                        groupValues={f.seo}
                        formState={f}
                        onNestedCheck={makeNestedCheck("seo")}
                        onTextChange={onTextChange}
                    />
                </SectionCard>

                {/* ── Section 8 · Legal & Compliance ── */}
                <SectionCard title={data.section8.title}>
                    <ChecklistGroup
                        options={data.section8.options}
                        groupValues={f.legal}
                        formState={f}
                        onNestedCheck={makeNestedCheck("legal")}
                        onTextChange={onTextChange}
                    />
                    <p className="text-xs italic mt-2" style={{ color: "var(--text-muted)" }}>{data.section8.note}</p>
                </SectionCard>

      

                {/* ── Section 9 · Budget & Timeline ── */}
                <SectionCard title={data.section9.title}>
                    <RadioGroup
                        label={data.section9.budgetLabel}
                        name="budget"
                        value={f.budget}
                        options={data.section9.budgetOptions}
                        onChange={v => onRadio("budget", v)}
                    />
                    <RadioGroup
                        label={data.section9.timelineLabel}
                        name="timeline"
                        value={f.timeline}
                        options={data.section9.timelineOptions}
                        onChange={v => onRadio("timeline", v)}
                    />
                    {f.timeline === "fixedDate" && (
                        <InlineInput name="fixedDate" value={f.fixedDate} placeholder={data.section9.dateLabel} onChange={onTextChange} />
                    )}
                </SectionCard>

                {/* ── Section 10 · Maintenance & Support ── */}
                <SectionCard title={data.section10.title}>
                    <RadioGroup
                        label={data.section10.maintenanceLabel}
                        name="maintenanceType"
                        value={f.maintenanceType}
                        options={data.section10.maintenanceOptions}
                        onChange={v => onRadio("maintenanceType", v)}
                    />
                    <ChecklistGroup
                        options={data.section10.extraOptions}
                        groupValues={{ onboarding: f.onboarding, documentation: f.documentation }}
                        formState={f}
                        onNestedCheck={(key, checked) => onBoolCheck(key as keyof BriefingFormState, checked)}
                        onTextChange={onTextChange}
                    />
                </SectionCard>

                {/* ── Section 11 · Communication ── */}
                <SectionCard title={data.section11.title}>
                    <RadioGroup
                        label={data.section11.channelLabel}
                        name="preferredChannel"
                        value={f.preferredChannel}
                        options={data.section11.channelOptions}
                        onChange={v => onRadio("preferredChannel", v)}
                    />
                    {f.preferredChannel === "other" && (
                        <InlineInput name="channelOther" value={f.channelOther} placeholder="..." onChange={onTextChange} />
                    )}
                    <RadioGroup
                        label={data.section11.feedbackLabel}
                        name="feedbackRounds"
                        value={f.feedbackRounds}
                        options={data.section11.feedbackOptions}
                        onChange={v => onRadio("feedbackRounds", v)}
                    />
                    <CheckItem
                        label={data.section11.multipleStakeholders}
                        checked={f.multipleStakeholders}
                        onChange={v => onBoolCheck("multipleStakeholders", v)}
                    />
                    <TextInput label={data.section11.availabilityLabel} name="feedbackAvailability" value={f.feedbackAvailability} placeholder="z.B. Mo–Fr 09:00–17:00" onChange={onTextChange} />
                </SectionCard>

                {/* ── Privacy + Submit ── */}
                <div className="glass-card rounded-2xl p-6 md:p-8 space-y-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={f.privacyAccepted}
                            onChange={e => onBoolCheck("privacyAccepted", e.target.checked)}
                            required
                            className="mt-0.5 w-4 h-4 rounded shrink-0 focus:ring-2 focus:ring-(--ring)"
                            style={{ background: "var(--bg-surface)", borderColor: "var(--border)", accentColor: "var(--accent)" }}
                        />
                        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{data.privacyLabel}</span>
                    </label>

                    {submitStatus && (
                        <div className={`p-4 rounded-xl text-sm ${submitStatus === "success"
                                ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                : "bg-red-500/10 border border-red-500/20 text-red-400"
                            }`}>
                            {statusMessage}
                        </div>
                    )}

               

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/15"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                </svg>
                                {data.submittingText}
                            </span>
                        ) : (
                            <>
                                <Send className="w-4 h-4" />
                                {data.submitButton}
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
