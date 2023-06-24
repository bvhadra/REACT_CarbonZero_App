//carbon emissions in tonnes/year

const questionsList = [
    {
        id: 0,
        category: "travel",
        question: "How many miles did you drive in the past year?",
        answers: [ "None", "Below 5,000", "5,000 - 10,000", "Over 10,000" ], 
        calculations: [ 0, 1, 1.5, 2.5 ],
        response: 0
    },
    {
        id: 1,
        category: "travel",
        question: "How often do you use public transportation (e.g. bus, train) in a week?",
        answers: [ "None", "1 - 3 times", "4 - 6 times", "More than 6 times" ], 
        calculations: [ 0, 0.5, 1, 2 ],
        response: 0
    },
    {
        id: 2,
        category: "travel",
        question: "How many round-trip flights have you made in the past year?",
        answers: [ "None", "1 - 2 times", "3 - 5 times", "More than 5 times" ], 
        calculations: [ 0, 1, 1.5, 2.5],
        response: 0
    },
    {
        id: 3,
        category: "food",
        question: "How many days per week do you consume red meat?",
        answers: [ "None", "1 - 3 times", "4 - 6 times", "Every day" ], 
        calculations: [ 0.5, 1, 1.5, 2.5 ],
        response: 0
    },
    {
        id: 4,
        category: "food",
        question: "How many days per week do you consume seafood?",
        answers: [ "None", "1 - 3 times", "4 - 6 times", "Every day" ], 
        calculations: [ 0.5, 0.5, 1, 1.5 ],
        response: 0
    },
    {
        id: 5,
        category: "energy",
        question: "How many hours a day do you use air conditioning or heating at home?",
        answers: [ "Never", "Under 6 hrs", "6 - 12 hrs", "12+ hrs" ], 
        calculations: [ 1, 3, 4, 5 ],
        response: 0
    },
    {
        id: 6,
        category: "energy",
        question: "How is your electricity powered?",
        answers: [ "100% clean", "50% clean", "25% clean", "0% clean" ], 
        calculations: [ 1, 2, 3, 5 ],
        response: 0
    },
    {
        id: 7,
        category: "clothing",
        question: "How much do you spend on brand new items (e.g. clothes, furniture) on a monthly basis?",
        answers: [ "Less than £150", "£150 - £750", "£750 - £1,500", "£1,500+" ], 
        calculations: [ 0.5, 1, 1.5, 2 ],
        response: 0
    }
];

export default questionsList