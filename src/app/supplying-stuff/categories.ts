export interface Category{
    name: string;
    imgSrc: string;
    commingSoon: boolean;
    subcategories: Subcategory[]
}
export interface Subcategory{
    name: string;
    parentCategory:string;
    commingSoon: boolean;
}

export const categories: Category[] = [
    {
        name: 'Slang',
        imgSrc: '../../../../assets/category-tile/slang/slang',
        commingSoon: true,
        subcategories: [
            {
                name: "",
                parentCategory: "Slang",
                commingSoon: true,
            }
        ]
    },
    {
        name: 'Legal Terms',
        imgSrc: '../../../../assets/category-tile/legal-terms/legal',
        commingSoon: false,
        subcategories: [
            {
                name: "International Humanitarian Law",
                parentCategory: "Legal Terms",
                commingSoon: false,
            },
            {
                name: "Criminal Law",
                parentCategory: "Legal Terms",
                commingSoon: false,
            },
            {
                name: "Court Procedure",
                parentCategory: "Legal Terms",
                commingSoon: false,
            },
            {
                name: "Family Law",
                parentCategory: "Legal Terms",
                commingSoon: false,
            },
            {
                name: "Real Property Law",
                parentCategory: "Legal Terms",
                commingSoon: false,
            },
            {
                name: "Company Law",
                parentCategory: "Legal Terms",
                commingSoon: false,
            },
            {
                name: "General Legal Expressions",
                parentCategory: "Legal Terms",
                commingSoon: false,
            },
            {
                name: "Contract Law",
                parentCategory: "Legal Terms",
                commingSoon: false,
            },
            {
                name: "Ecological Law",
                parentCategory: "Legal Terms",
                commingSoon: true,
            },
            {
                name: "Antitrust Law",
                parentCategory: "Legal Terms",
                commingSoon: true,
            },
            {
                name: "ECHR Terms",
                parentCategory: "Legal Terms",
                commingSoon: true,
            },
        ]
    },
    {
        name: 'Idioms',
        imgSrc: '../../../../assets/category-tile/idioms/idiom',
        commingSoon: true,
        subcategories: [
            {
                name: "",
                parentCategory: "Idioms",
                commingSoon: true,
            }
        ]
    },
    {
        name: 'Aviation Terms',
        imgSrc: '../../../../assets/category-tile/aviation/aviation',
        commingSoon: true,
        subcategories: [
            {
                name: "",
                parentCategory: "Aviation Terms",
                commingSoon: true,
            }
        ]
    },
    {
        name: 'Medical Terms',
        imgSrc: '../../../../assets/category-tile/medical/medical',
        commingSoon: true,
        subcategories: [
            {
                name: "",
                parentCategory: "Aviation Terms",
                commingSoon: true,
            }
        ]
    },
    {
        name: 'IT Terms',
        imgSrc: '../../../../assets/category-tile/it/it',
        commingSoon: true,
        subcategories: [
            {
                name: "",
                parentCategory: "IT",
                commingSoon: true,
            }
        ]
    },
]