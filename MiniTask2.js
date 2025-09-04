// destruck painting, education name index ke 0 

const bio = {
    name : "Ari eka saputra",
    age: 18
}

const extraBio = {
    skills: ["Web Programming", "Painting"],
    education: [
        {
            name: "SMP 8 Depok",
            year: 2019
        }
    ]
}


const profile = {
    ...bio,
    ...extraBio
}
const {skills:[_, favoridSkill]} = profile
const {education: [{name: schollName}]} = profile

console.log(favoridSkill) // Painting
console.log(schollName) // SMP 8 Depok
