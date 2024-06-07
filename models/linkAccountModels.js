class LinkAccount {
    constructor(email, phone, type, referenceId, legalBusinessName, businessType, contactName, profile, legalInfo) {
        this.email = email;
        this.phone = phone;
        this.type = type;
        this.reference_id = referenceId;
        this.legal_business_name = legalBusinessName;
        this.business_type = businessType;
        this.contact_name = contactName;
        this.profile = profile;
        this.legal_info = legalInfo;
    }

    static validate(data) {
        if (!data.email || !data.phone || !data.type || !data.reference_id || !data.legal_business_name ||
            !data.business_type || !data.contact_name || !data.profile || !data.legal_info) {
            return false;
        }
        return true;
    }
}

module.exports = LinkAccount;
