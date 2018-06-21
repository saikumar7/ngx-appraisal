export const HOUSING: any = {
    questions: [
        {
            id: 1,
            key: 'Current housing situation',
            value: '',
            isRadio: false,
            isInput: false,
            isCheckbox: false,
            isDropdown: true,
            dropdownOptions: [
                {
                    key: 'Paying rent or mortgage',
                    value: ''
                },
                {
                    key: 'Living with a relative',
                    value: ''
                },
                {
                    key: 'College dorm',
                    value: ''
                },
                {
                    key: 'Transitional living program',
                    value: ''
                },
                {
                    key: 'Emergency shelter',
                    value: ''
                },
                {
                    key: 'Homeless',
                    value: ''
                },
                {
                    key: 'Motel\/Hotel',
                    value: ''
                }
            ],
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Please select'
        },
        {
            id: 2,
            key: 'Length of time in current housing',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: true,
            placeHolderValue: 'Time in Current Housing'
        },
        {
            id: 3,
            key: 'Have you ever been homelessness?',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Yes',
                    value: ''
                },
                {
                    key: 'No',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 4,
            key: 'If yes, How long?',
            value: '',
            isRadio: true,
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            radioOptions: [
                {
                    key: '0-6 months',
                    value: ''
                },
                {
                    key: '6-12 months',
                    value: ''
                },
                {
                    key: '12-18 months',
                    value: ''
                },
                {
                    key: '18-24 months',
                    value: ''
                }
            ],
            isDate: false,
            hasDependency: true,
            dependsOn: 3,
            hasPlaceholder: true,
            placeHolderValue: ''
        },
        {
            id: 5,
            key: 'Have you ever been evicted?',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Yes',
                    value: ''
                },
                {
                    key: 'No',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 6,
            key: 'If yes, How long?',
            value: '',
            isRadio: true,
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            radioOptions: [
                {
                    key: '0-3 months',
                    value: ''
                },
                {
                    key: '3-6 months',
                    value: ''
                },
                {
                    key: '6-9 months',
                    value: ''
                },
                {
                    key: '9-12 months',
                    value: ''
                }
            ],
            isDate: false,
            hasDependency: true,
            dependsOn: 5,
            hasPlaceholder: true,
            placeHolderValue: ''
        },
        {
            id: 7,
            key: 'Are you able to meet all of your monthly obligations?',
            value: '',
            isRadio: true,
            radioOptions: [
                {
                    key: 'Yes',
                    value: ''
                },
                {
                    key: 'No',
                    value: ''
                }
            ],
            isInput: false,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: false,
            hasPlaceholder: false,
            placeHolderValue: ''
        },
        {
            id: 8,
            key: 'If no, explain',
            value: '',
            isRadio: false,
            isInput: true,
            isCheckbox: false,
            isDropdown: false,
            isDate: false,
            hasDependency: true,
            dependsOn: 7,
            hasPlaceholder: true,
            placeHolderValue: 'Obligations'
        }
    ]
};