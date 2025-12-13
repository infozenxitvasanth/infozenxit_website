// File: PopupFormValidate.ts

export type FormData = {
    name: string;
    email: string;
    phone: string;
    resume: string;
    note: string;
    jobId?: string | null;
};

export type ValidationErrors = {
    name?: string;
    email?: string;
    phone?: string;
    resume?: string;
    note?: string;
};

/**
 * Validates the form data
 */
export const validateFormData = (data: FormData): ValidationErrors => {
    const errors: ValidationErrors = {};

    // Validate name (required)
    if (!data.name.trim()) {
        errors.name = "Name is required";
    } else if (data.name.trim().length < 2) {
        errors.name = "Name must be at least 2 characters";
    } else if (data.name.trim().length > 100) {
        errors.name = "Name must not exceed 100 characters";
    }

    // Validate email (required)
    if (!data.email.trim()) {
        errors.email = "Email is required";
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            errors.email = "Please enter a valid email address";
        }
    }

    // Validate phone (REQUIRED)
    if (!data.phone.trim()) {
        errors.phone = "Phone number is required";
    } else {
        // Remove all non-digit characters for validation
        const digitsOnly = data.phone.replace(/\D/g, '');

        if (digitsOnly.length < 10) {
            errors.phone = "Phone number must be at least 10 digits";
        } else if (digitsOnly.length > 15) {
            errors.phone = "Phone number is too long";
        }

        // Check if contains only valid characters
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(data.phone)) {
            errors.phone = "Phone number contains invalid characters";
        }
    }

    if (!data.resume.trim()) {
        errors.resume = "Please enter resume link"
    }
    else if (data.resume.trim()) {
        try {
            const url = new URL(data.resume);
            // Check if it's http or https
            if (!['http:', 'https:'].includes(url.protocol)) {
                errors.resume = "Resume link must be a valid HTTP/HTTPS URL";
            }
        } catch {
            errors.resume = "Please enter a valid URL (e.g., https://drive.google.com/...)";
        }
    }

    // Validate note (optional)
    if (data.note.trim() && data.note.trim().length > 500) {
        errors.note = "Note must not exceed 500 characters";
    }

    return errors;
};

/**
 * Validates a single field (for real-time validation)
 */
export const validateField = (fieldName: keyof FormData, value: string, allData?: Partial<FormData>): string | undefined => {
    const trimmedValue = value.trim();

    switch (fieldName) {
        case 'name':
            if (!trimmedValue) return "Name is required";
            if (trimmedValue.length < 2) return "Name must be at least 2 characters";
            if (trimmedValue.length > 100) return "Name must not exceed 100 characters";
            return undefined;

        case 'email':
            if (!trimmedValue) return "Email is required";
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(trimmedValue)) return "Please enter a valid email address";
            return undefined;

        case 'phone':
            if (!trimmedValue) return "Phone number is required";
            const digitsOnly = trimmedValue.replace(/\D/g, '');
            if (digitsOnly.length < 10) return "Phone number must be at least 10 digits";
            if (digitsOnly.length > 15) return "Phone number is too long";
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(trimmedValue)) return "Phone number contains invalid characters";
            return undefined;

        case 'resume':
            if (!trimmedValue) return "resume is required";
            try {
                const url = new URL(trimmedValue);
                if (!['http:', 'https:'].includes(url.protocol)) {
                    return "Resume link must be a valid HTTP/HTTPS URL";
                }
            } catch {
                return "Please enter a valid URL (e.g., https://drive.google.com/...)";
            }
            return undefined;

        case 'note':
            if (trimmedValue && trimmedValue.length > 500) {
                return "Note must not exceed 500 characters";
            }
            return undefined;

        default:
            return undefined;
    }
};

