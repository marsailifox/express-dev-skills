const skills = [
    {id: 125223, skill: 'Express'},
    {id: 127904, skill: 'JavaScript'},
    {id: 139608, skill: 'Troubleshooting'}
];
  
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.done = false
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function updateOne(formData, id) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    skill.skill = formData.skill
    if(formData.done) {
        skill.done = true
    } else {
        skill.done = false
    }
}