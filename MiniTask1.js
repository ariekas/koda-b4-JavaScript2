const bio = {
    name : "ari",
    age: 18
}

const extraInfo = {
    skills:  ["developer", "painting"],
    education: [
        {
            name: "SMP 1 Bali",
            year: 2025
        }
    ]
}

const profile = {
    ...bio,
    ...extraInfo
}

console.log(profile.skills[1])
// painting
