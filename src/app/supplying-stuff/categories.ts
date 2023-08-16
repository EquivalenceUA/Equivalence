export interface Category{
    name: string;
    imgSrc: string;
    commingSoon: Boolean;
    subcategories: Subcategory[]
}
export interface Subcategory{
    name: String;
    parentCategory:String;
    commingSoon: Boolean;
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
                name: "Contractual Law",
                parentCategory: "Legal Terms",
                commingSoon: false,
            },
            {
                name: "Corporate Law",
                parentCategory: "Legal Terms",
                commingSoon: false,
            },
            {
                name: "Family Law",
                parentCategory: "Legal Terms",
                commingSoon: false,
            },
            {
                name: "Litigation",
                parentCategory: "Legal Terms",
                commingSoon: false,
            },
            {
                name: "Migration Law",
                parentCategory: "Legal Terms",
                commingSoon: false,
            },
            {
                name: "Civil Law",
                parentCategory: "Legal Terms",
                commingSoon: true,
            },
            {
                name: "Criminal Law",
                parentCategory: "Legal Terms",
                commingSoon: true,
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
        name: 'IT',
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