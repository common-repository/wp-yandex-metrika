if (window.tmpwpym != undefined){
    window.wpym = {
        ec: new YmEc(window.tmpwpym.datalayername),
        counters: window.tmpwpym.counters,
        targets:  window.tmpwpym.targets,
    };
}

jQuery(function($) {
    if (window.wpym === undefined){return;}

    const {targets, counters} = window.wpym;

    for (const target of targets) {
        $(target.selector).on(target.event, () => {
            counters.forEach(counter => {
                ym(counter.number, 'reachGoal', target.target);
            });
        })
    }
});
