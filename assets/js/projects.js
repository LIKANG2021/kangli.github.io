$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/cbm.png',
            link: 'https://www.sciencedirect.com/science/article/pii/S0950061823024352',
            title: 'Study on the penetration capability of GPR for the steel-fibre reinforced concrete (SFRC) segment based on numerical simulations and model test',
            demo: false,
            technologies: ['CBM','Q1','Published'],
            description: "Li, K., Xie, X., Huang, C., Zhou, B., Duan, W., Lin, H., & Wang, C.",
            categories: ['journal', 'all']
        },
        {
            image: 'assets/images/usdp.png',
            link: 'https://github.com/abhn/Wall-E',
            title: 'Thickness regression for backfill grouting of shield tunnels based on GPR data and CatBoost & BO-TPE: A full-scale model test study',
            demo: false,
            technologies: ['USDP', 'Q1', 'Published'],
            description: "Li, K., Xie, X., Zhou, B., Huang, C., Lin, W., Zhou, Y., & Wang, C.",
            categories: ['journal', 'all']
        },
        {
            image: 'assets/images/zgglxb.png',
            link: 'https://zgglxb.chd.edu.cn/CN/10.19721/j.cnki.1001-7372.2024.03.021',
            title: '盾构隧道双液同步注浆GPR检测模型试验 (Model Test Study on GPR Detection for Cement-sodium Silicate Synchronous Grouting in Shield Tunnel) (in Chinese)',
            demo: false,
            technologies: ['EI', 'Published'],
            description: "李康, 谢雄耀，周彪，黄昌富，周益涵 (Li K., Xie X., Zhou B., Huang C., Zhou Y)",
            categories: ['journal', 'all']
        },
        {
            image: 'assets/images/wr.png',
            link: 'https://www.sciencedirect.com/science/article/pii/S0043135423012307',
            title: 'End-to-end machine-learning for high-gravity ammonia stripping: Bridging the gap between scientific research and user-friendly applications',
            demo: false,
            technologies: ['WR','Q1', 'Published'],
            description: "Guo, S., Zhou, J., Li, Z., Zheng, L., Wang, X., Cheng, S., & Li, K",
            categories: ['journal', 'all']
        },
        
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
