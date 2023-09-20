export default interface Word {
    engWord:{
        type: String,
        required: true
    },
    ukrWord:{
        type: String,
        required: true
    },
    engDescriptions:{
        type: [String],
        required: false
    },
    ukrDescriptions:{
        type: [String],
        required: false
    },
    engExamples:{
        type: [String],
        required: false
    },
    ukrExamples:{
        type: [String],
        required: false
    },
    hastags:{
        type: [String],
        required: false
    },
    numberOfLikes:{
        type: Number,
        default: 0,
        required: false
    },
    isVerb:{
        type: Boolean,
        required: true,
        default: false
    },
    donatedBy:{
        type: String,
        required: true,
        default: "Ivanna Pukman"
    },
}