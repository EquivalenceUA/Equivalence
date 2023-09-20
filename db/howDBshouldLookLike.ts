interface User{
    username: String,
    password: String,
    email: String,
    userAvatar: String,
    addedWords: Word[],
    numberOfAdded: Number,
    savedWords: Word[],
    numberOfSaved: Number,

}   

interface Word {
    engWord: String,
    ukrWord: String,
    engDescriptions: String[],
    ukrDescriptions: String[],
    engExamples: String[],
    ukrExamples:String[],
    author: User,
    hashes: String[],
    numberOfLikes: Number,
    isVerb:Boolean,
}

interface Hashtag{
    name:String,
}



interface SubCategory {
    name: String,
    words: Word[]
    imgSource: String
}

interface Categories{
    name: String,
    commingSoon: Boolean,
    subCategories: SubCategory[]
    imgSource: String
}






