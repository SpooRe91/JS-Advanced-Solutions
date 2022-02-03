function constructionCrew(worker) {

    const neededHydration = Number((worker.experience * worker.weight) / 10);
    if (worker.dizziness === true) {
        worker.levelOfHydrated += neededHydration;
        worker.dizziness = false;
    }
    return worker
}
constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
});