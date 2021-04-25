const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Hacker = new Schema(
    {
        name: {
            type: String
        },
        profilelink: {
            type: String
        },
        location: {
            type: String
        },
        education: {
            type: String
        },
        challengesSolved: {
            type: Number
        },
        solutionSubmitted: {
            type: Number
        },
        solutionAccepted: {
            type: Number
        },
        overAllRank: {
            type: Number
        },
        followers: {
            type: Number
        },
        following: {
            type: Number
        },
        competitivePerentile: {
            DataStructure: { Number },
            Algorithms: { Number },
            C: { Number },
            Java: { Number },
            Python: { Number },
            Html: { Number },
            javascript: { Number },

        },
        noOfVotes: {
            type: Number
        },
        timeStamp: {
            type: Number
        },
        deviceType: {
            type: String
        }

    },
    { collection: "hackers" }
);

module.exports = mongoose.model("hacker", Hacker);