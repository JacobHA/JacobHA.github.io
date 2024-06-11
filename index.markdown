---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
title: Home
---
<!-- <link rel='shortcut icon' type='image/x-icon' href='assets/favicon.ico?' /> -->
<link rel='shortcut icon' type='image/x-icon' href='./favicon.ico?' />

<!-- # DO NOT MOVE THE ABOVE LINE - ITS PLACEMENT (as well as non-exclusion of this file) IS NECESSARY FOR THE FAVICON TO WORK -->

Welcome to my personal website!
<!-- <link rel="stylesheet" type="text/css" href="https://github.com/JacobHA/JacobHA.github.io/css/style.css"> -->
<style>
* {
  box-sizing: border-box;
}

/* Create two unequal columns that floats next to each other */
.column {
    float: left;
    padding: 10px;
}

.left {
    width: 60%; 
    height
}

.right {
    width: 40%;
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}
</style>

<div class="row">
  <div class="column left" style="background-color:#aaa;">
  <a href = "/neel-research/">
    <img align = "left" src="assets/20190626neelpic.PNG" width = 400px>
  </a>
  </div>
  <div class="column right" style="background-color:#bbb;">
    <p>At <a href="https://neel.cnrs.fr/en">Néel Institute</a>, tightening up the final heat shield for their <a href="https://en.wikipedia.org/wiki/Dilution_refrigerator">"sionludi"</a>, a dilution refrigerator capable of reaching temperatures down to 50mK! You can learn more about my research experience on the <a href= "https://neel.cnrs.fr/en/equipes-poles-et-services/nano-electronique-quantique-et-spectroscopie-qunes">QuNES team</a> at Néel <a href="/neel-research/">here.</a>
    </p>
  </div>
</div>


<br>
<div class="row-after">
<!-- The purpose of this website is to post updates, blogs, and tutorials on various topics related to physics, mathematics, and machine learning - as well as other topics that I find interesting. -->

My current focus on RL research is in transfer learning, summarized in the following schematic.

<!-- Insert the transfer_schematic.png, scaled down and center it -->
<p align="center">
<img align = "center" src="assets/transfer_schematic.png" width = 400px>
</p>

<!-- I hope to use this website as a resource for explaining my research and some of my Github repositories. -->
</div>
<h2>Recent Announcements</h2>

- Aug. 9-12, 2024: I will be presenting our work at RLC 2024 in Amherst, MA.

- Aug. 5-16, 2024: I have been accepted to attend the IAIFI Summer School and Summer Workshop.

- June, 11 2024: I am a reviewer for NeurIPS 2024 -- this is my first time as a conference reviewer!

- May 10, 2024: Our paper has been accepted for publication at the (inaugural) Reinforcement Learning Conference!

- May 3, 2024: I was nominated and inducted with lifetime membership to CSU's chapter of Sigma Pi Sigma.

- May 2, 2024: I was awarded the Beacon Graduate Student Leadership Award. Thank you to all of those who nominated me!

- Mar. 4-8, 2024: I attended the annual [APS March Meeting][aps24-link] to share our work on deep average-reward RL algorithms developed from our work in [PRR][prr-link]. You can find the slides for that talk [here][aps24-slides].

- Mar. 1, 2024: I was awarded the [GDS IMPACT Award][gds-link] for my work at the intersection of physics and reinforcement learning.

- Jan. 22, 2024 - May 6, 2024: I've started a deep learning class, free for anyone to attend (pizza and drinks included!), with minimal prerequisites. See [here][linkedin-class] and [here][deep-repo] for more details. I'm excited to share my enthusiasm about the deep learning (and particularly deep RL) revolution. 

- Dec. 18, 2023: Tharon Holdsworth and I presented a project for Akira Sone's quantum control course, where we study properties of the sech pulse and its use in quantum control. We will be releasing results on arXiv shortly, and code can be found [here][sech-repo]. 

- Sept. 6, 2023: We updated the arXiv with a newer version of our work on double-sided bounds for the value function in reinforcement learning: [arxiv link][arxiv-bounds]

- Aug. 7-18, 2023: I attended the IAIFI [Summer School](https://iaifi.org/phd-summer-school.html) and [Summer Workshop](https://iaifi.org/summer-workshop.html). I had an amazing time! I met and learned from many brilliant people working at the intersection of fundamental physics and AI - in both theoretical and experimental settings. 

- July 31 - Aug. 4, 2023: I presented our work on compositionality in reinforcement learning at the [2023 Conference on Uncertainty in Artificial Intelligence (UAI)][uai-ja-link] ([poster][ja-uai-poster]). My co-author, Argenis Arriojas, received a Poster Spotlight award for our other work: ["Bayesian Inference Approach for Entropy Regularized Reinforcement Learning with Stochastic Dynamics"][uai-aa-link].

- July 25, 2023: I have been awarded the College of Science and Mathematics (CSM) Dean's Doctoral Research Fellowship for Fall 2023. This fellowship will continue to support my research at the interface of physics and reinforcement learning (thank you to CSM!).

- May 12, 2023: I presented my work at the [7th Annual CSM Student Success Showcase](https://www.umb.edu/news_events_media/events/seventh_annual_csm_student_success_showcase). See my poster [here][csm-poster-link] (pdf [here][csm-pdf-poster]).

- May 11, 2023: I presented my work and future research goals for reinforcement learning at the "Physics Department Retreat" at UMass Boston.

- May 8, 2023: Our papers (1) ["Bounding the Optimal Value Function in Compositional Reinforcement Learning"](https://arxiv.org/abs/2303.02557) and (2) "Bayesian Inference Approach for Entropy Regularized Reinforcement Learning with Stochastic Dynamics" have both been accepted in UAI 2023.

- Mar. 30 - Apr. 27, 2023: I taught a 5 week mini-course titled "Deep Learning and Physics" for all students and faculty at UMass Boston. I am planning to offer a similar, extended course in the future. ([See the flyer here][minicourse-flyer].)

- Apr. 1, 2023: Our paper entitled "Entropy regularized reinforcement learning using large deviation theory" was accepted for publication in [Physical Review Research][prr-link]. ([A more detailed post is pending][pending-post].)

- Mar. 13, 2023: We have added two new papers to the arXiv: [Bounding the Optimal Value Function in Compositional Reinforcement Learning](https://arxiv.org/abs/2303.02557) and [Compositionality and Bounds for Optimal Value Functions in Reinforcement Learning](https://arxiv.org/abs/2302.09676) exploring the use of bounds on the Q-function in deep reinforcement learning. ([A more detailed post is pending][pending-post].)

- Mar. 5, 2023: I attended the 2023 APS March Meeting in Las Vegas, NV. I presented a talk on my research in the statistical mechanics approach to reinforcement learning. ([A more detailed post is pending][pending-post].)

- Feb. 13, 2023: I had a great time presenting at my first AI conference (AAAI-2023) in Washington, D.C. I met many great people and learned a lot about what the broader community is interested in. ([Here is a more detailed post][aaai-post].)

- Dec. 2, 2022: I have been awarded a College of Science and Mathematics (CSM) Dean's Doctoral Research Fellowship for Spring 2023. This fellowship will support my research in the [statistical mechanics approach to reinforcement learning][arxiv-paper]. I am very grateful to the CSM for this award, and I look forward to continuing my research in the coming year.

- Nov. 20, 2022: Our group's first paper on entropy-regularized reinforcement learning titled ["Utilizing Prior Solutions for Reward Shaping and Composition in Entropy-Regularized Reinforcement Learning"][research-post] was accepted at AAAI-2023 ([LinkedIn][linkedin-link]). Here is the [ArXiv version][new-arxiv-paper].

- Oct. 17, 2022: I gave a [talk][slides-link] for my PhD qualifying exam. I passed and was thus promoted to PhD candidacy.

[uai-ja-link]: https://proceedings.mlr.press/v216/adamczyk23a.html

[uai-aa-link]: https://proceedings.mlr.press/v216/arriojas23a.html

[linkedin-link]: https://www.linkedin.com/posts/jacob-adamczyk-182b8a1a4_composable-deep-reinforcement-learning-for-activity-7000170354451054592-B5X0?utm_source=share&utm_medium=member_desktop

[slides-link]: /assets/qualifying-exam-slides.pdf

[arxiv-paper]: https://arxiv.org/abs/2106.03931

[new-arxiv-paper]: https://arxiv.org/abs/2212.01174

[research-post]: /rewardshaping-research

[aaai-post]: /aaai-2023

[pending-post]: /pending-post

[prr-link]: https://journals.aps.org/prresearch/accepted/81076Yf5R561237418ac5b2093a5adf6f2ed1000c

[minicourse-flyer]: /assets/minicourse-flyer.pdf

[csm-poster-link]: /assets/CSM%20JHA%202023_video.pptx

[csm-pdf-poster]: /assets/CSMJHA2023.pdf

[research-page]: research

[linkedin-class]: https://www.linkedin.com/posts/jacob-adamczyk-182b8a1a4_im-excited-to-announce-advertise-that-activity-7153832919436836865-G5Cd?utm_source=share&utm_medium=member_desktop

[deep-repo]: https://github.com/jacobha/deep-learning

[aps24-link]: https://meetings.aps.org/Meeting/MAR24/Session/S28.2

[sech-repo]: https://github.com/jacobha/sech_pulse

[arxiv-bounds]: https://arxiv.org/abs/2302.09676

[aps24-slides]: /assets/APS24.pdf

[ja-uai-poster]: /assets/536_adamczyk.pdf

[gds-link]: https://engage.aps.org/gds/honors/prizes-awards/impact-award