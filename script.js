// ═══════════════════════════════════════════════════════════════
// PROJECT DATA WITH CASE STUDIES (ALL 30 VIDEOS)
// REORGANIZED: 10 LONG VIDEOS FIRST, THEN 20 SHORT VIDEOS
// ═══════════════════════════════════════════════════════════════

const allProjects = [
    // LONG-FORM VIDEOS (10) - DISPLAYED FIRST
    {
        id: 21,
        type: 'long',
        videoId: '-YNFAFWixRo',
        title: '[Spartan.Edu] Software Demo & Advertisement',
        desc: 'Scripting, Storyboard, Video editing, Motion graphic',
        icon: 'fa-laptop',
        challenge: 'Spartan.Edu needed to establish credibility as a serious education platform from day one. Generic software demos do not convert high-ticket B2B buyers or convince educators to trust a new platform.',
        architecture: 'Designed "Premium SaaS Visual Language": Crafted script emphasizing inevitability of the solution, not just features. Storyboarded every scene to maximize negative space (signals premium). Used enterprise-level color grading and subtle motion graphics that guide attention without overwhelming. Positioned product as the obvious choice, not just an option. This became their brand foundation.',
        bts: [
            { img: './SpartanEdu_timeline.png', caption: 'After Effects timeline - 172 shape layers with precise animation timing' },
            { img: './SpartanEdu_StoryBoard.png', caption: 'Storyboard layout for Spartan.Edu demo' }
        ]
    },
    {
        id: 22,
        type: 'long',
        videoId: 'GdCr5FT_z20',
        title: '[Aliena Cai] How I Use Figma Component',
        desc: 'Editing Video Project "Conterine"',
        icon: 'fa-film',
        challenge: 'Figma component tutorials exist everywhere. Aliena needed to stand out while teaching complex technical concepts without losing beginners.',
        architecture: 'Implemented "Show Do Not Tell" editing: Instead of lengthy explanations, used screen recordings with strategic zooms and highlights to guide attention. Added "why this matters" text overlays at key decision points. Maintained pace that respects viewer time while ensuring comprehension. Technical content made accessible without dumbing down.',
        bts: [
            { img: './Aliena_Cai__figma_component.png', caption: 'Component files and editing assets in Google Drive' },
            { img: './aliena_component.png', caption: 'Asana task management for Aliena tutorial' },
            { img: './Aliena_How_i_got_100_.png', caption: 'Script planning and timeline setup' }
        ]
    },
    {
        id: 23,
        type: 'long',
        videoId: 'QPX0-l5e4_8',
        title: '[Finn Dollimore] Figma Components for Pro Web Design',
        desc: 'Editing Video Project "Conterine"',
        icon: 'fa-chart-line',
        challenge: 'Finn had deep expertise but videos were not holding attention past 30 seconds. High value content was being wasted due to poor retention mechanics.',
        architecture: 'Deployed "Micro-Dopamine System": Fast-paced B-roll changes every 3-5 seconds, strategic zooms on key actions, progress indicators showing exactly where viewer is in tutorial. Added "pattern interrupts" every 90 seconds to reset attention span. Retention increased 40%, watch time doubled.',
        bts: [
            { img: './Finn_Dollimore_Project.png', caption: 'Finn Dollimore website design project - high-converting layout' }
        ]
    },
    {
        id: 24,
        type: 'long',
        videoId: '8_dNmI8gyZQ',
        title: '[Micky Dollimore] Nomadic Software Developer - Malaysia',
        desc: 'Editing Video Project "Conterine"',
        icon: 'fa-chalkboard-user',
        challenge: 'Micky needed to position himself as premium developer consultant, not just another "digital nomad" vlogger. Content risked looking like lifestyle flex instead of professional authority.',
        architecture: 'Crafted "Aspirational Yet Achievable" narrative: Selective B-roll emphasized work over locations, cinematic transitions maintained production quality, strategic voiceover pacing emphasized expertise over lifestyle. Showed the discipline behind the freedom. Positioned him as thought leader, attracted consulting inquiries.',
        bts: [
            { img: './Micky_Dollomore_visual_edit_board.png', caption: 'Visual edit board and style guide for Micky Dollimore' }
        ]
    },
    {
        id: 25,
        type: 'long',
        videoId: 'DpLfBVhFohI',
        title: '[Aliena Cai] Figma to Wix Studio (2025 Agency Method)',
        desc: 'Editing Video Project "Conterine"',
        icon: 'fa-video',
        challenge: 'Complex 45+ minute tutorial with high drop-off risk. Needed to maintain engagement while teaching advanced concepts without shortcuts.',
        architecture: 'Built "Chapter System" with visual timestamps, deployed strategic "pattern interrupts" every 8 minutes to reset attention, maintained consistent "Show Do not Tell" editing rhythm. Added recap moments for viewers who jumped ahead. Result: 78% completion rate (industry average: 40%).',
        bts: [
            { img: './CleanShot_2026-01-07_at_20_29_47_2x.png', caption: 'Video structure planning - Brand guidelines and research phase' },
            { img: './CleanShot_2026-01-07_at_20_28_39_2x.png', caption: 'Notion database - Organized tutorial chapters and timestamps' },
            { img: './CleanShot_2026-01-07_at_20_29_57_2x.png', caption: 'Design exploration - Style #1 (standard) vs Style #2 (bold) comparison' },
            { img: './CleanShot_2026-01-07_at_20_28_27_2x.png', caption: 'Script excerpt - Working with client revisions and iteration' }
        ]
    },
    {
        id: 26,
        type: 'long',
        videoId: 'I67if-hz_UY',
        title: '[Micky Dollimore] What is a Tileset - Mapbox',
        desc: 'Editing Video Project "Conterine"',
        icon: 'fa-magnifying-glass-chart',
        challenge: 'Highly technical explainer for B2B audience. Risk of being too dry or too dumbed-down. Needed to engage without condescending.',
        architecture: 'Used "Strategic Layering": Started with business problem (the "why"), then revealed technical solution (the "how") through animated diagrams. Each feature got "Use Case Spotlight" to maintain relevance. Made technical content feel essential, not optional.',
        bts: [
            { img: './Micky_Dollimore_What_is_title_set.png', caption: 'Google Drive folder with tileset resources and reference materials' }
        ]
    },
    {
        id: 27,
        type: 'long',
        videoId: 'rd61UBl0aSQ',
        title: '[Micky Dollimore] 5 Must-Have Real Estate Map Features',
        desc: 'Editing Video Project "Conterine"',
        icon: 'fa-presentation-screen',
        challenge: 'Feature list format inherently dry. Needed to make checklist content feel dynamic and essential.',
        architecture: 'Transformed into "Problem-Solution Journey": Each feature introduced through specific pain point it solves. Used before/after comparisons for each. Maintained narrative arc across all five features. Made checklist feel like revelation sequence.',
        bts: [
            { img: './Micky_5_feature_must_have.png', caption: 'Script document and Google Drive folder for 5 features video' }
        ]
    },
    {
        id: 28,
        type: 'long',
        videoId: '5TByH9yks7w',
        title: 'Apple Business Essential Ads (Alight Motion)',
        desc: 'Editing Challenge Recover',
        icon: 'fa-microphone-lines',
        challenge: 'Client project that had been abandoned by previous editor. Needed to salvage what existed and transform into premium deliverable.',
        architecture: 'Applied "Reconstruct Strategy": Identified usable footage, re-graded everything for consistency, added motion graphics to fill gaps, reimagined pacing entirely. Turned failed project into portfolio piece. Proved ability to rescue difficult situations.',
        bts: [


        ]
    },
    {
        id: 29,
        type: 'long',
        videoId: 'u8MeXGcM8yA',
        title: 'WhatsApp Intro - Trail Edit',
        desc: 'Trail Editing Video (establishing new standard visual)',
        icon: 'fa-user-tie',
        challenge: 'Trail project to establish new visual standard for potential client pitches. Needed to demonstrate capabilities while showcasing specific style.',
        architecture: 'Created "Style Showcase Hybrid": Delivered functional WhatsApp intro while embedding signature techniques: kinetic typography, strategic color grading, motion graphic integration. Made the demo itself a selling tool. Successfully used in multiple client acquisitions.',
        bts: []
    },
    {
        id: 30,
        type: 'long',
        videoId: '8Zvv017-su4',
        title: 'Think Like a Consultant: 4 Shifts for Better Client Conversations',
        desc: 'Educational Content - Client Strategy Framework',
        icon: 'fa-handshake-angle',
        challenge: 'Most freelancers and developers approach client conversations with a "yes-man" mentality, focusing solely on securing payment. This leads to low-paying gigs, endless revisions, and clients who don\'t value their expertise. The video needed to teach a mindset shift that transforms freelancers into consultants.',
        architecture: 'Structured as "Strategic Framework Breakdown": Opening hook addresses the pain point directly ("Are you tired of chasing clients..."). Four actionable shifts presented with real-world examples. Each shift builds on the previous, creating a complete consultation methodology. Used strategic text overlays, clean transitions, and professional voiceover to establish authority. The content positions the creator as an expert teaching other experts, elevating perceived value.',
        bts: [
            { img: './CleanShot_2026-01-14_at_17_34_06_2x.png', caption: 'Script planning in Google Docs - Framework breakdown with client conversation strategy' },
            { img: './CleanShot_2026-01-14_at_17_35_09.png', caption: 'Production notes - B-roll planning and voiceover timing considerations' }
        ]
    },

    // SHORT-FORM VIDEOS (20) - DISPLAYED AFTER LONG VIDEOS
    {
        id: 1,
        type: 'short',
        videoId: 'DVhsQYGzwkk',
        title: 'Before & After Showcase',
        desc: 'Trail Edits',
        icon: 'fa-bolt',
        challenge: 'Needed to demonstrate editing transformation in a compelling way that goes beyond simple before/after. The goal was to show not just technical skill, but the strategic thinking behind each edit decision.',
        architecture: 'Created a dynamic showcase using split-screen transitions and strategic text overlays highlighting key editing decisions: pacing changes, color grading choices, audio layering. Each transformation reveals the "why" behind the edit, turning a portfolio piece into a teaching moment that builds authority.',
        bts: [



        ]
    },
    {
        id: 2,
        type: 'short',
        videoId: 'Z3uH0LFWdXE',
        title: 'Before & After Showcase',
        desc: 'Trail Edits',
        icon: 'fa-graduation-cap',
        challenge: 'Client videos lacked energy and failed to capture attention in the first 3 seconds—critical for social media success.',
        architecture: 'Implemented "Energy Architecture": Quick cuts in the first 2 seconds, strategic use of sound design to create anticipation, and visual pattern breaks every 4-5 seconds. The result: 40% increase in 3-second retention rate.',
        bts: [


        ]
    },
    {
        id: 3,
        type: 'short',
        videoId: 'P0ZV2kXeZ78',
        title: 'Before & After Showcase',
        desc: 'Trail Edits',
        icon: 'fa-handshake',
        challenge: 'Corporate content looked stiff and unapproachable, failing to connect with target audience on an emotional level.',
        architecture: 'Applied "Human-First Editing": Zoomed into micro-expressions, used strategic slow-motion on key moments, added subtle motion graphics that guide viewer attention without overwhelming. Transformed corporate content into relatable storytelling.',
        bts: [


        ]
    },
    {
        id: 4,
        type: 'short',
        videoId: 'jK3AqJy1sPE',
        title: 'Before & After Showcase',
        desc: 'Trail Edits',
        icon: 'fa-robot',
        challenge: 'Tech product demos were boring and failed to communicate value proposition quickly enough for short-form platforms.',
        architecture: 'Developed "Feature-Benefit Rhythm": Each feature shown for exactly 2 seconds with immediate benefit visualization. Used kinetic typography to reinforce key value props. Demo transformed from explanation to experience.',
        bts: [

        ]
    },
    {
        id: 5,
        type: 'short',
        videoId: 'sTi8MvFw3bM',
        title: 'VSTN Podcast - National Flag Viral',
        desc: '1M Views (Tiktok)',
        icon: 'fa-brain',
        challenge: 'VSTN Podcast had strong content but struggled to break through the noise on TikTok. Needed a viral moment that felt authentic, not manufactured.',
        architecture: 'Engineered "Patriotic Emotion Hook": Isolated 15-second segment about Vietnamese flag, synced cuts to emotional peaks in speaker voice, added cinematic color grading that emphasized national colors. Strategic text overlays amplified message without explaining it. Result: 1M+ views organically, establishing VSTN as must-watch content.',
        bts: [
            { img: './VSTN_Script_Nhu__ng_vie_n_đa_n_bay_ra_tu___no__ng_su_ng.png', caption: 'Google Doc script for VSTN viral clip about Vietnamese flag' },
            { img: './VSTN_visual_edit_board.png', caption: 'Visual edit board and style guide for VSTN Podcast' },

        ]
    },
    {
        id: 6,
        type: 'short',
        videoId: '0kgboYEC2MY',
        title: 'VSTN Podcast - Gifted Children',
        desc: '500K Views (Tiktok)',
        icon: 'fa-video',
        challenge: 'Philosophical content about gifted children rarely performs on short-form. The topic is inherently long-form, but needed to work in 60 seconds without losing depth.',
        architecture: 'Used "Thought Cliffhangers": Cut at moments of maximum intellectual tension, visualized abstract concepts with simple motion graphics, strategic text reveals that guide viewer internal dialogue. Made thinking addictive. 500K+ views, 80% watch-through rate.',
        bts: [


        ]
    },
    {
        id: 7,
        type: 'short',
        videoId: 'qiaIVpr7AL0',
        title: 'VSTN Podcast - Why Smart People Fail',
        desc: '100K Views (Tiktok)',
        icon: 'fa-box-open',
        challenge: 'Counter-intuitive topic (smart people failing) needed to hook viewers immediately while maintaining credibility.',
        architecture: 'Opened with "Pattern Interrupt": First frame challenges viewer assumption, followed by rapid-fire examples that build curiosity. Used strategic pauses before key insights. Content positioned as revelation, not lecture.',
        bts: [

        ]
    },
    {
        id: 8,
        type: 'short',
        videoId: '06Q9EXbQuUM',
        title: 'VSTN Podcast Archive',
        desc: 'Unpost (project Archive)',
        icon: 'fa-star',
        challenge: 'Archival content needed to be presented in a way that maintains production value standards while acknowledging it is from the vault.',
        architecture: 'Created "Archive Aesthetic": Subtle film grain, date stamp in corner, slightly muted colors that signal "throwback" without looking dated. Content positioned as "classic" rather than "old."',
        bts: [

        ]
    },
    {
        id: 9,
        type: 'short',
        videoId: '2gMznknUTWk',
        title: 'VSTN Podcast Archive',
        desc: 'Unpost (project Archive)',
        icon: 'fa-calendar-day',
        challenge: 'Secondary archive content that did not meet publication standards but had value for die-hard fans.',
        architecture: 'Developed "Behind-The-Scenes Frame": Presented as exclusive content for true fans, added commentary overlays explaining context. Turned rejected content into community-building asset.',
        bts: []
    },
    {
        id: 10,
        type: 'short',
        videoId: '67ka-3XRjCQ',
        title: 'VSTN Podcast Discussion',
        desc: '110K Views (Tiktok)',
        icon: 'fa-comments',
        challenge: 'Discussion-heavy content lacks visual variety, risking viewer drop-off despite strong dialogue.',
        architecture: 'Implemented "Visual Conversation": Strategic zooms on speaker during key points, B-roll inserts that visualize concepts being discussed, text highlights of quotable moments. Transformed talking heads into dynamic visual experience.',
        bts: []
    },
    {
        id: 11,
        type: 'short',
        videoId: 'OcCy9Saqj_M',
        title: 'VSTN Podcast Highlight',
        desc: '300K Views (Tiktok)',
        icon: 'fa-lightbulb',
        challenge: 'Needed to extract viral moment from 2-hour podcast without losing context that makes the insight meaningful.',
        architecture: 'Built "Context Capsule": 5-second setup that establishes stakes, main insight delivery, 3-second callback that reinforces message. Viewer gets full value in 30 seconds. 300K views proved the format works.',
        bts: []
    },
    {
        id: 12,
        type: 'short',
        videoId: 'd4Po2a3ih4w',
        title: 'VSTN Podcast Feature',
        desc: '200K Views (Tiktok)',
        icon: 'fa-check-double',
        challenge: 'Similar content from competitors was saturating the feed. Needed differentiation without changing core message.',
        architecture: 'Applied "Signature Styling": Unique lower-third design, custom transitions, specific color grading that becomes instantly recognizable. Same content, unmistakable presentation. Built brand equity with every view.',
        bts: []
    },
    {
        id: 13,
        type: 'short',
        videoId: 'SZ1TCIUhexQ',
        title: 'Micky Dollimore - Developer Life',
        desc: 'Unpost (project Archive)',
        icon: 'fa-arrow-right-arrow-left',
        challenge: 'Developer content often too technical for general audience, too basic for technical audience. Needed to serve both.',
        architecture: 'Created "Layered Complexity": Surface level shows results and benefits (for general audience), subtle details and code snippets (for technical viewers). Everyone finds value at their level.',
        bts: []
    },
    {
        id: 14,
        type: 'short',
        videoId: '7iLU196HoC4',
        title: 'Micky Dollimore - Maps Demo',
        desc: 'Unpost (project Archive)',
        icon: 'fa-newspaper',
        challenge: 'Map software demonstrations inherently dry, difficult to make engaging without losing technical accuracy.',
        architecture: 'Deployed "Use-Case Storytelling": Instead of explaining features, showed real-world problems being solved. Each feature introduced through a specific pain point it addresses. Made technical demo feel like problem-solving showcase.',
        bts: []
    },
    {
        id: 15,
        type: 'short',
        videoId: '2C1g4t2IB0U',
        title: 'Kevin Mach - Self-Improvement Trail Edit',
        desc: 'Trail Project (Rush Delivery)',
        icon: 'fa-rocket',
        challenge: 'Kevin Mach, a self-improvement content creator, needed a trail edit under extreme time pressure to evaluate editing style and turnaround speed. Only raw footage provided, deadline was impossibly tight—had to deliver professional trail edit in hours, not days. Pressure was on to prove both speed AND quality simultaneously.',
        architecture: 'Executed "Speed + Quality Protocol": No time for extensive research, immediately identified Kevin\'s core message in raw footage. Applied rapid-fire jump cuts to maintain energy in talking-head format, used pre-built text overlay templates customized to self-improvement messaging. Strategic color grading preset matched his brand in minutes. Every decision optimized for speed without sacrificing polish. Result: Trail edit delivered in record time with broadcast quality. Proved capability to handle urgent requests while maintaining his authentic voice. Client impressed by both turnaround speed and professional output—speed became the differentiator.',
        bts: []
    }

];
// ═══════════════════════════════════════════════════════════════
// RENDER GALLERY
// ═══════════════════════════════════════════════════════════════

function renderGallery(filter = 'all') {
    try {
        const grid = document.getElementById('gallery-grid');
        if (!grid) {
            console.error('Gallery grid not found');
            return;
        }

        const filtered = filter === 'all' ? allProjects : allProjects.filter(p => p.type === filter);

        // Use YouTube thumbnails instead of iframes for performance
        grid.innerHTML = filtered.map(project => {
            const thumbContent = project.videoId
                ? `<img src="https://i.ytimg.com/vi/${project.videoId}/hqdefault.jpg" 
                             class="thumb" 
                             alt="${project.title}"
                             loading="lazy">
                           <div class="play-overlay">▶</div>`
                : `<img src="${project.thumbnail || 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800'}" 
                             class="thumb" 
                             alt="${project.title}"
                             loading="lazy">
                           <div class="play-overlay">▶</div>`;

            return `
                        <div class="gallery-card ${project.type} scroll-animate-scale" onclick="openCaseStudy(${project.id})">
                            <div class="thumb-wrapper">
                                ${thumbContent}
                            </div>
                            <div class="meta-data">
                                <div class="gallery-title">${project.title}</div>
                                <div class="gallery-desc">
                                    <i class="fa-solid ${project.icon}"></i> ${project.desc}
                                </div>
                            </div>
                        </div>
                    `;
        }).join('');

        // Re-observe new elements for scroll animation
        setTimeout(() => {
            observeElements();
        }, 100);
    } catch (error) {
        console.error('Gallery render error:', error);
    }
}

function filterGallery(type) {
    renderGallery(type);
}

// ═══════════════════════════════════════════════════════════════
// CASE STUDY MODAL
// ═══════════════════════════════════════════════════════════════

function openCaseStudy(projectId) {
    const project = allProjects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('case-study-modal');
    const videoContainer = document.getElementById('modal-video-case');
    const challengeEl = document.getElementById('modal-challenge-case');
    const architectureEl = document.getElementById('modal-architecture-case');
    const btsGallery = document.getElementById('modal-bts-gallery');

    // Lazy load video
    if (project.videoId) {
        videoContainer.innerHTML = `
                    <iframe 
                        src="https://www.youtube.com/embed/${project.videoId}?autoplay=1" 
                        
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                `;
    } else {
        videoContainer.innerHTML = `<img src="${project.thumbnail}" style="width:100%;height:100%;object-fit:cover;">`;
    }

    challengeEl.textContent = project.challenge;
    architectureEl.textContent = project.architecture;

    // Render BTS gallery
    if (project.bts && project.bts.length > 0) {
        btsGallery.innerHTML = project.bts.map((item, index) => `
                    <div class="bts-image-wrapper" onclick="openBTSLightbox('${item.img}')">
                        <img src="${item.img}" alt="BTS ${index + 1}" class="bts-image" loading="lazy">
                        <div class="bts-caption">${item.caption}</div>
                    </div>
                `).join('');
    } else {
        btsGallery.innerHTML = `
                    <p style="color: var(--text-secondary); font-style: italic; text-align: center; padding: 40px;">
                        📸 Behind-the-scenes photos coming soon! This project was completed before our BTS documentation process.
                    </p>
                `;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCaseStudy() {
    const modal = document.getElementById('case-study-modal');
    const videoContainer = document.getElementById('modal-video-case');

    videoContainer.innerHTML = '';
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openBTSLightbox(imgSrc) {
    const lightbox = document.getElementById('bts-lightbox');
    const lightboxImage = document.getElementById('bts-lightbox-image');

    lightboxImage.src = imgSrc;
    lightbox.classList.add('active');
}

function closeBTSLightbox(event) {
    if (event.target.id === 'bts-lightbox' || event.target.classList.contains('bts-lightbox-close')) {
        const lightbox = document.getElementById('bts-lightbox');
        lightbox.classList.remove('active');
        event.stopPropagation();
    }
}

// Close on ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCaseStudy();
        const lightbox = document.getElementById('bts-lightbox');
        if (lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
        }
    }
});

// Close on background click
document.getElementById('case-study-modal').addEventListener('click', (e) => {
    if (e.target.id === 'case-study-modal') closeCaseStudy();
});

// ═══════════════════════════════════════════════════════════════
// TRANSLATION & NAVIGATION
// ═══════════════════════════════════════════════════════════════

const translations = {
    en: {
        status: "SYSTEM RECALIBRATION",
        status_subtext: "Not accepting new clients until Q3 2026.",
        status_detail: "Currently upgrading internal infrastructure. The Shadow Protocol requires absolute focus.",
        nav_home: "Story", nav_showcase: "Archive", nav_booking: "Contact", btn_book_nav: "Book Strategy",
        hero_title: "Henry <span class='text-gradient'>Marques</span>",
        hero_desc: "I don't sell videos. I engineer <strong>Brand-Led Growth Systems</strong> that turn industry experts, coaches & entrepreneurs into high-ticket authorities — using video as the cornerstone.",
        btn_view: "Explore Archive", btn_philosophy: "My Philosophy", insp_label: "Built on the shoulders of giants. Inspired by",
        trusted_label: "Strategic Impact Delivered (collaborated with <strong>Conterine</strong>) For",
        trusted_by_title: "2026 Trusted <span class='text-gradient'>By</span>",
        client_spartan_name: "SpartanEdu",
        client_spartan_type: "Start-up Tech Website",
        client_active: "Active",
        client_next: "Your Brand",
        client_next_desc: "Next Success Story",
        client_available: "Available",
        bio_title: "The Brand-Led Growth<br>Architect.",
        bio_desc1: "My name is <strong>Henry Marques (Lý Minh Phúc)</strong>. While most agencies chase aesthetics, I chose a different path: <strong>Brand-Led Growth over Art.</strong> Profound experiences require fundamental theories — that realization reshaped how I see marketing: not as persuasion, but as <strong>system design grounded in behavioral and economic principles.</strong>",
        bio_desc2: "My core mission is not just to edit videos — it's to help industry experts, coaches, and entrepreneurs turn their experiences into <strong>authority and high-ticket consulting ecosystems</strong> by using video as a cornerstone. I don't sell videos; I sell the <strong>certainty of outcome.</strong>",
        role_title: "Current Focus", role_desc: "Scaling Filmoty Agency while maintaining Academic Excellence at Grade 12.",
        journey_title: "The",
        exp_1: "<strong>At Conterine.</strong> Architected the post-production workflow. Managed quality control for high-volume deliverables and scaled the team without breaking the system. Besides, establishing video style is my responsibility when it comes to new potential clients.",
        exp_2: "Mastered retention mechanics. Worked directly with international creators to decode the algorithm of \"High-Ticket Attention\". Clients: VSTN Podcast, Finn Dollimore, Micky Dollimore, Aliena Cai.",
        exp_3: "Building a sustainable Agency model driven by a clear vision. Learned the hard way that talent without process leads to burnout.",
        why_title: "Why <span class='text-gradient'>Brand-Led Growth?</span>",
        why_subtitle: "Aesthetics and emotion — without strategy — lead to a race to the bottom. You need a system that converts.",
        tilt_title_1: "Niche & Authority Positioning",
        tilt_title_2: "Video Funnel Engineering",
        tilt_title_3: "Brand & Workflow Standardization",
        card_1: "I define your niche, surface your personal story as a client magnet, and build a GTM approach that directly targets high-ticket audiences who seek real value — not the cheapest option.",
        card_2: "I engineer video marketing funnels that filter for new views, build authority, and convert traffic into revenue — with IMC at the core to keep the system scalable without breaking.",
        card_3: "Standardized Brand Guidelines and Workflow Systems eliminate operational bottlenecks and scattered information — accelerating turnaround times and making quality repeatable at scale.",
        ready_title: "Stop Guessing.<br>Start Building.",
        btn_strategy_cta: "Book Discovery Call",
        social_title: "Connect <span class='text-gradient'>With Us</span>",
        recap_title: "2025 <span class='text-gradient'>Year in Review</span>",
        recap_subtitle: "A cinematic journey through our most impactful projects and strategic wins.",
        recap_coming: "2025 Recap Video",
        recap_status: "Coming Soon",
        recap_instructions_bold: "To add your video:",
        recap_instructions_text: "Uncomment the iframe below and<br>replace YOUR_VIDEO_ID with your YouTube video ID",
        social_facebook: "Facebook",
        social_instagram: "Instagram",
        social_youtube: "YouTube",
        social_personal: "Henry Marques",
        social_agency: "Filmoty Agency",
        social_personal_ig: "@henrymarques",
        social_agency_ig: "@filmoty",
        social_personal_yt: "Henry Marques",
        social_agency_yt: "Filmoty Channel",
        copyright: "© 2025 Filmoty Agency. Engineered by Henry Marques.",
        archive_desc: "Collection of 30+ executed strategic projects. <strong>Click to view case study.</strong>",
        booking_badge: "Strategy Session",
        booking_title: "Let's Architect Your <br><span class='text-gradient'>Revenue</span>",
        booking_desc: "A 1:1 consultation (60 mins) to audit your current content bottleneck and define a roadmap for authority & scale.",
        list_1: "Audit: Branding & Our feasible support",
        list_2: "Strategy: High-Ticket Concept Direction",
        list_3: "System: Production-House Workflow Design"
    },
    vi: {
        status: "NÂNG CẤP HỆ THỐNG",
        status_subtext: "Không nhận khách hàng mới cho đến Q3 2026.",
        status_detail: "Đang nâng cấp cơ sở hạ tầng nội bộ. Giao Thức Bóng Tối yêu cầu sự tập trung tuyệt đối.",
        nav_home: "Câu chuyện", nav_showcase: "Kho tàng", nav_booking: "Liên hệ", btn_book_nav: "Đặt lịch Tư vấn",
        hero_title: "Henry <span class='text-gradient'>Marques</span>",
        hero_desc: "Tôi không bán video. Tôi thiết kế <strong>Hệ thống Brand-Led Growth</strong> giúp chuyên gia, coach & doanh nhân trở thành thương hiệu uy tín cao cấp — lấy video làm nền tảng cốt lõi.",
        btn_view: "Xem Kho Tàng", btn_philosophy: "Triết lý của tôi", insp_label: "Đứng trên vai người khổng lồ, Được truyền cảm hứng bởi",
        trusted_label: "Đã làm việc và trao giá trị (hợp tác cùng <strong>Conterine</strong>) cho ",
        trusted_by_title: "2026 Được tin tưởng <span class='text-gradient'>bởi</span>",
        client_spartan_name: "SpartanEdu",
        client_spartan_type: "Website Công nghệ Start-up",
        client_active: "Hiện tại",
        client_next: "Thương hiệu của bạn",
        client_next_desc: "Câu chuyện Tiếp theo",
        client_available: "Sẵn sàng",
        bio_title: "Kiến Trúc Sư <br>Brand-Led Growth.",
        bio_desc1: "Tên tôi là <strong>Henry Marques (Lý Minh Phúc)</strong>. Khi hầu hết agency đuổi theo thẩm mỹ, tôi chọn lối đi khác: <strong>Brand-Led Growth quan trọng hơn Nghệ thuật.</strong> Trải nghiệm sâu sắc cần lý thuyết nền tảng — và nhận thức đó định hình lại cách tôi nhìn marketing: không phải thuyết phục, mà là <strong>thiết kế hệ thống dựa trên nguyên lý hành vi và kinh tế.</strong>",
        bio_desc2: "Sứ mệnh cốt lõi của tôi không chỉ là edit video — mà là giúp chuyên gia, coach, doanh nhân biến kinh nghiệm của họ thành <strong>uy tín và hệ sinh thái tư vấn high-ticket</strong> bằng cách lấy video làm nền tảng. Tôi không bán video; tôi bán <strong>sự chắc chắn về kết quả.</strong>",
        role_title: "Trọng tâm hiện tại", role_desc: "Mở rộng quy mô Filmoty Agency trong khi duy trì Xuất sắc Học thuật ở Lớp 12.",
        journey_title: "Hành Trình",
        exp_1: "<strong>Tại Conterine.</strong> Kiến tạo quy trình hậu kỳ. Quản lý kiểm soát chất lượng cho khối lượng sản phẩm lớn và mở rộng đội ngũ mà không phá vỡ hệ thống. Bên cạnh đó, việc xây dựng phong cách video là trách nhiệm của tôi khi tiếp cận những khách hàng tiềm năng mới.",
        exp_2: "Làm chủ cơ chế giữ chân người xem (Retention). Làm việc trực tiếp với các Creator quốc tế để giải mã thuật toán của sự \"Chú ý Giá trị cao\". Những khách hàng đã làm việc: VSTN Podcast, Finn Dollimore, Micky Dollimore, Aliena Cai.",
        exp_3: "Xây dựng mô hình Agency bền vững dựa trên tầm nhìn rõ ràng. Đã học được bài học xương máu rằng tài năng không có quy trình sẽ dẫn đến kiệt sức.",
        why_title: "Tại sao <span class='text-gradient'>Brand-Led Growth?</span>",
        why_subtitle: "Thẩm mỹ và cảm xúc — không có chiến lược — dẫn đến cuộc đua xuống đáy. Bạn cần một hệ thống tạo ra chuyển đổi thực sự.",
        tilt_title_1: "Định vị Niche & Uy tín",
        tilt_title_2: "Kỹ thuật Phễu Video",
        tilt_title_3: "Chuẩn hóa Thương hiệu & Quy trình",
        card_1: "Tôi xác định niche của bạn, khai thác câu chuyện cá nhân như một nam châm thu hút khách hàng, và xây dựng GTM nhắm thẳng vào tệp high-ticket đang tìm kiếm giá trị thực — không phải giá rẻ nhất.",
        card_2: "Tôi thiết kế phễu video marketing lọc view mới, xây dựng uy tín và chuyển đổi lưu lượng thành doanh thu — với IMC là cốt lõi để hệ thống mở rộng mà không sụp đổ.",
        card_3: "Brand Guidelines và Workflow chuẩn hóa loại bỏ điểm nghẽn vận hành và thông tin rời rạc — tăng tốc thời gian bàn giao và làm cho chất lượng có thể nhân rộng theo quy mô.",
        ready_title: "Ngừng Đoán Mò.<br>Bắt Đầu Xây Dựng.",
        btn_strategy_cta: "Đặt lịch Khám phá",
        social_title: "Kết nối <span class='text-gradient'>Với chúng tôi</span>",
        recap_title: "Nhìn lại <span class='text-gradient'>2025</span>",
        recap_subtitle: "Hành trình điện ảnh qua những dự án có tác động mạnh mẽ nhất và những chiến thắng chiến lược.",
        recap_coming: "Video Nhìn lại 2025",
        recap_status: "Sắp ra mắt",
        recap_instructions_bold: "Để thêm video:",
        recap_instructions_text: "Bỏ comment iframe bên dưới và<br>thay YOUR_VIDEO_ID bằng ID video YouTube của bạn",
        social_facebook: "Facebook",
        social_instagram: "Instagram",
        social_youtube: "YouTube",
        social_personal: "Henry Marques",
        social_agency: "Filmoty Agency",
        social_personal_ig: "@henrymarques",
        social_agency_ig: "@filmoty",
        social_personal_yt: "Henry Marques",
        social_agency_yt: "Kênh Filmoty",
        copyright: "© 2025 Filmoty Agency. Được thiết kế bởi Henry Marques.",
        archive_desc: "Tuyển tập các dự án chiến lược đã thực thi. Hơn 30+ Tư liệu. <strong>Click để xem case study.</strong>",
        booking_badge: "Phiên Tư vấn Chiến lược",
        booking_title: "Cùng Kiến tạo <br><span class='text-gradient'>Doanh thu</span> của bạn",
        booking_desc: "Buổi tư vấn 1:1 (60 phút) để đánh giá điểm nghẽn nội dung hiện tại và xác định lộ trình cho uy tín & quy mô.",
        list_1: "Audit: Phân tích Thương hiệu & Đưa ra Giải pháp Thích Hợp",
        list_2: "Chiến lược: Định hướng Concept High-Ticket",
        list_3: "Hệ thống: Thiết kế Quy trình Sản xuất Chuyên nghiệp"
    }
};

let currentLang = 'en';

function toggleLang() {
    currentLang = currentLang === 'en' ? 'vi' : 'en';
    const data = translations[currentLang];
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (data[key]) el.innerHTML = data[key];
    });
}

function navigateTo(pageId) {
    try {
        // Hide all sections
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(pageId);
        if (targetSection) {
            targetSection.classList.add('active');
        } else {
            console.error('Section not found:', pageId);
            return;
        }

        // Update nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        const navButtons = document.querySelectorAll('.nav-btn');
        if (pageId === 'home' && navButtons[0]) navButtons[0].classList.add('active');
        if (pageId === 'showcase' && navButtons[1]) navButtons[1].classList.add('active');
        if (pageId === 'booking' && navButtons[2]) navButtons[2].classList.add('active');

        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Trigger scroll animations after navigation
        setTimeout(() => {
            observeElements();
        }, 300);
    } catch (error) {
        console.error('Navigation error:', error);
    }
}

// 3D Tilt Effect
document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `perspective(1000px) rotateX(${-y / 25}deg) rotateY(${x / 25}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)');
});

// ═══════════════════════════════════════════════════════════════
// SOCIAL LINKS TOGGLE
// ═══════════════════════════════════════════════════════════════

function toggleSocialLinks(card) {
    // Close other cards
    document.querySelectorAll('.social-card').forEach(c => {
        if (c !== card) {
            c.classList.remove('expanded');
        }
    });

    // Toggle current card
    card.classList.toggle('expanded');
}

// ═══════════════════════════════════════════════════════════════
// MARQUEE DUPLICATION FOR MOBILE
// ═══════════════════════════════════════════════════════════════

function initMarquee() {
    // Only on mobile
    if (window.innerWidth <= 768) {
        // Duplicate inspirations
        const inspItems = document.querySelector('.insp-items');
        if (inspItems && !inspItems.hasAttribute('data-duplicated')) {
            const clone = inspItems.innerHTML;
            inspItems.innerHTML = clone + clone;
            inspItems.setAttribute('data-duplicated', 'true');
        }

        // Duplicate trusted logos
        const trustedLogos = document.querySelector('.trusted-logos');
        if (trustedLogos && !trustedLogos.hasAttribute('data-duplicated')) {
            const clone = trustedLogos.innerHTML;
            trustedLogos.innerHTML = clone + clone;
            trustedLogos.setAttribute('data-duplicated', 'true');
        }

        // Duplicate trusted-by clients
        const trustedByCompact = document.querySelector('.trusted-by-compact');
        if (trustedByCompact && !trustedByCompact.hasAttribute('data-duplicated')) {
            const clone = trustedByCompact.innerHTML;
            trustedByCompact.innerHTML = clone + clone;
            trustedByCompact.setAttribute('data-duplicated', 'true');
        }
    }
}

// ═══════════════════════════════════════════════════════════════
// SCROLL ANIMATION SYSTEM
// ═══════════════════════════════════════════════════════════════

function observeElements() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation delay
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observe all animation elements
    document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale').forEach(el => {
        observer.observe(el);
    });
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();

    // Add animation classes to elements
    addAnimationClasses();

    // Start observing
    observeElements();

    // Init marquee for mobile
    initMarquee();
});

// Reinit marquee on resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        initMarquee();
    }, 250);
});

// Add animation classes to appropriate elements
function addAnimationClasses() {
    // Animate section headings
    document.querySelectorAll('section h1, section h2').forEach((el, index) => {
        if (!el.classList.contains('scroll-animate')) {
            el.classList.add('scroll-animate');
        }
    });

    // Animate cards with stagger
    document.querySelectorAll('.tilt-card').forEach((card, index) => {
        if (index % 3 === 0) card.classList.add('scroll-animate-left');
        else if (index % 3 === 1) card.classList.add('scroll-animate');
        else card.classList.add('scroll-animate-right');
    });

    // Animate gallery cards
    document.querySelectorAll('.gallery-card').forEach((card, index) => {
        card.classList.add('scroll-animate-scale');
    });

    // Animate timeline items
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.classList.add('scroll-animate-left');
    });

    // Animate bio card
    const bioCard = document.querySelector('.bio-card');
    if (bioCard) bioCard.classList.add('scroll-animate-left');

    // Animate trusted logos
    document.querySelectorAll('.t-item').forEach((item, index) => {
        item.classList.add('scroll-animate');
    });
}
