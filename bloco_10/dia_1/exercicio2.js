function techList(arrayTechnologies, name) {
    if (arrayTechnologies.length === 0) return "Vazio!";

    return arrayTechnologies.map((technology) => ({
        name: name,
        tech: technology
    })).sort((a, b) => a.tech < b.tech ? -1 : a.tech > b.tech ? 1 : 0 )
}

module.exports = techList;
