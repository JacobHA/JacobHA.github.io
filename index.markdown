---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
title: Home
---
<!-- <link rel='shortcut icon' type='image/x-icon' href='assets/favicon.ico?' /> -->
<link rel='shortcut icon' type='image/x-icon' href='./favicon.ico?' />

<!-- # DO NOT MOVE THE ABOVE LINE - ITS PLACEMENT (as well as non-exclusion of this file) IS NECESSARY FOR THE FAVICON TO WORK -->

Welcome to my personal website! You can find my resume [here][resume-link].
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

<p align="center">
I am currently working on deep RL for the average reward objective:

<img align = "center" src="assets/avg_rwd.png" width = 400px>
</p>


<!-- Insert the transfer_schematic.png, scaled down and center it -->
<p align="center">
and compositionality or transfer learning:

<img align = "center" src="assets/transfer_schematic.png" width = 400px>
</p>



</div>
<!-- <h2>Recent Announcements</h2> -->
<!-- 
- Dec. 21, 2024: 5 papers accepted to AAAI-2025 and workshops! "Bootstrapped Reward Shaping", "EVAL: EigenVector-based Average-reward Learning", "Average Reward Reinforcement Learning with Entropy-Regularization", "Inferring Transition Dynamics from Value Functions", "CASH: Cache Alignment with Specificied Horizons". arXiv links coming soon!

- Dec. 18, 2024: I will be a reviewer for ICML 2025 📄✍️

- Dec. 9-15, 2024: With Josiah Kratz, I presented our work at [NeurIPS 2024][neurips-paper] in Vancouver, Canada! ([poster][neurips-poster]) 

- Nov. 3-10, 2024: I presented our work on average-reward RL at MLQT ("Machine Learning for Quantum Technologies") in Erlangen, Germany! ([poster][mlqt-poster]) I was able to meet some leaders in the field of Quantum + ML, and saw a lot of exciting new ideas.

- Oct. 30, 2024: I was accepted for an internship at Sony AI for the summer of 2025! I will be working on deep RL with average-reward objectives for video games. Very excited!

- Oct. 25, 2024: Reviewing papers for ICLR and AISTATS... 📄✍️

- Oct. 9, 2024: The work with Josiah based on our meeting at IAIFI has been accepted as a [workshop paper][neurips-paper] in ML4PS @ NeurIPS 2024! "Reinforcement Learning for Optimal Control of Adaptive Cell Populations".

- Aug. 9-12, 2024: I presented our [work][rlc-paper] at RLC 2024 in Amherst, MA. The invited talks were amazing! I learned a lot about the current state of the art in reinforcement learning and met many great people. ([slides][rlc-slides], [poster][rlc-poster])

- Aug. 5-16, 2024: I have been accepted to attend the IAIFI Summer School and Summer Workshop. I worked on a project with Josiah Kratz based on reinforcement learning in biological control. ([slides][iaifi-slides])

- June, 11 2024: I am a reviewer for NeurIPS 2024 -- this is my first time as a conference reviewer! 

- May 10, 2024: [Our paper][rlc-paper] has been accepted for publication at the (inaugural) Reinforcement Learning Conference!

- May 3, 2024: I was nominated and inducted with lifetime membership to CSU's chapter of Sigma Pi Sigma.

- May 2, 2024: I was awarded the [Beacon Graduate Student Leadership Award][award-pic]. Thank you to all of those who nominated me!

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

- Oct. 17, 2022: I gave a [talk][slides-link] for my PhD qualifying exam. I passed and was thus promoted to PhD candidacy. -->

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

[resume-link]: /assets/Jacob_Adamczyk_résumé.pdf

[neurips-paper]: https://arxiv.org/abs/2410.08439

[neurips-poster]: assets/ml4ps-poster-export.pdf

[rlc-paper]: https://rlj.cs.umass.edu/2024/papers/Paper345.html

[iaifi-slides]: /assets/IAIFI24_Hackathon.pdf

[rlc-slides]: /assets/rlc-talk.pdf

[rlc-poster]: /assets/rlc-poster.pdf

[award-pic]: /assets/gallery/award-umb2.jpg

[mlqt-poster]: /assets/mlqt-file.pdf

<!-- # center this: -->
<p align="center">
<a href="/research/" target="_blank">Check out this visualization of my research papers and their connections!</a>
</p>

<div class="timeline">
  <br>
  <h2>Recent Announcements</h2>
  <br>
  <ul class="timeline-list">
  <!-- <li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Oct. 25, 2024">
    <p>Reviewing papers for NeurIPS... 📄✍️</p>
  </div>
  </li> -->
    <li>
  <div class="timeline-item">
      <div class="dot"></div>
      </div>
      <div class="content" data-date="Sept. 15-20 2025">
        <p>I will be in Tubingen, Germany to present our paper, "Average-Reward Soft Actor-Critic" at EWRL!</p>
      </div>
    </li>
    <li>
  <div class="timeline-item">
        <div class="dot"></div>
      </div>
      <div class="content" data-date="Aug. 12-16 2025">
        <p>I will be at the IAIFI Summer Workshop at Harvard to present our work on average-reward RL.</p>
      </div>
    </li>
  <li>
  <div class="timeline-item">
        <div class="dot"></div>
      </div>
      <div class="content" data-date="Aug. 5-9 2025">
        <p>I will be in Edmonton to present our paper, "Average-Reward Soft Actor-Critic" for the second Reinforcement Learning Conference!</p>
      </div>
    </li>
  <li>
    <div class="timeline-item">
        <div class="dot"></div>
      </div>
      <div class="content" data-date="July. 13-19, 2025">
        <p>I will be in Vancouver for ICML 2025 to present a recent paper "Exploration Behavior of Untrained Policies" at the high-dimensional learning dynamics (HiLD) workshop.</p>
      </div>
    </li>
  <li>
      <div class="timeline-item">
        <div class="dot"></div>
      </div>
      <div class="content" data-date="May. 13, 2025">
        <p>Our paper, "Saturation of the Cramér-Rao Bound for the Atomic Resonance Frequency with Phased Array of Hyperbolic Secant Pulses" is now available on <a href="https://arxiv.org/abs/2505.08192" target="_blank">arXiv</a>! In this work, with Tharon Holdsworth and Professor Girish S. Agarwal, we exploited properties of sech pulses to develop a pulse sequence capable of saturating the Cramér-Rao bound. This allows for the most precise measurements of atomic resonance frequencies.</p>
      </div>
    </li>
  <li>
    <div class="timeline-item">
        <div class="dot"></div>
      </div>
      <div class="content" data-date="May 9, 2025">
        <p>Our paper, "Average-reward Soft Actor-Critic" has been accepted at the second annual Reinforcement Leraning Conference! (details coming soon...)</p>
      </div>
    </li>
      <li>
      <div class="timeline-item">
        <div class="dot"></div>
      </div>
      <div class="content" data-date="April 23-May 2, 2025">
        <p>Traveled to ICLR (Singapore) and Inria (Lille, FR) to present our work on RL for drug dosing and deep average-reward RL algorithms, respectively.</p>
      </div>
    </li>
      <li>
      <div class="timeline-item">
        <div class="dot"></div>
      </div>
      <div class="content" data-date="April 11, 2025">
        <p>I was invited to give a guest lecture at UMass Boston's new AI4ALL class. I gave an introduction to RL including discussions of exploration-exploitation, reward hacking, and policy improvement. The students developed custom environments related to real-world problems of their interest, and deployed RL algorithms to understand how agents learn and act. I had a great time teaching and the students did a tremendous job! I think such courses are important for increasing diversity in the field while giving students more tools for their future careers. </p>
      </div>
    </li>
  <li>
      <div class="timeline-item">
        <div class="dot"></div>
      </div>
      <div class="content" data-date="Feb. 11, 2025">
        <p>I was invited to give a <a href="https://cohere.com/events/cohere-for-ai-Jacob-Adamczyk-2025" target="_blank">talk</a> at Cohere 4 AI -- tune in to hear more about our reward shaping research! Here's the <a href="https://youtu.be/70kVz9G2Z-o?si=B_nFGnr4212GcSNv">YouTube Link</a>.</p>
      </div>
    </li>
    <li>
      <div class="timeline-item">
        <div class="dot"></div>
      </div>
      <div class="content" data-date="Jan. 30, 2025">
        <p>The American Physical Society (APS) Group of Data Science (GDS) has awarded me the IMPACT award, given for "noteworthy progress in their academic careers at the intersection of Physics and Data Science". I am grateful to GDS for recognizing and supporting my work! They have played a pivotal role in helping me attend conferences during my PhD.</p>
      </div>
    </li>
    <li>
      <div class="timeline-item">
        <div class="dot"></div>
      </div>
      <div class="content" data-date="Jan. 22, 2025">
        <p>Our <a href="https://arxiv.org/abs/2410.08439" target="_blank">paper</a> was accepted at ICLR 2025! Very excited to travel to Singapore and present this work with Josiah, let me know if you'll be there!</p>
      </div>
    </li>
    <li>
      <div class="timeline-item">
        <div class="dot"></div>
      </div>
      <div class="content" data-date="Jan. 4, 2025">
        <p>
        I am a finalist for the Student Speaker Award, awarded by the American Physical Society (APS) Group of Statistical and Nonlinear Physics (GSNP) for the "best contributed talk at the March meeting by a graduate student in the area of Statistical and Nonlinear Physics." 
        </p>
      </div>
    </li>
    <li>
      <div class="timeline-item">
        <div class="dot"></div>
      </div>
      <div class="content"  data-date="Dec. 21, 2024">
        <p>5 papers accepted to AAAI-2025 and workshops! <a href="https://arxiv.org/abs/2501.00989" target="_blank">"Bootstrapped Reward Shaping"</a>, <a href="https://arxiv.org/pdf/2501.09770" target="_blank">"EVAL: EigenVector-based Average-reward Learning"</a>, <a href="https://arxiv.org/pdf/2501.09080" target="_blank">"Average Reward Reinforcement Learning with Entropy-Regularization"</a>, <a href="https://arxiv.org/pdf/2501.09081" target="_blank">"Inferring Transition Dynamics from Value Functions"</a>, and "CASH: Cache Alignment with Specified Horizons".</p>
      </div>
    </li>
    <li>
      <div class="timeline-item">
        <div class="dot"></div>
      </div>
      <div class="content" data-date="Dec. 18, 2024">
        <p>I will be a reviewer for ICML 2025 📄✍️</p>
      </div>
    </li>
    <li>
      <div class="timeline-item">
        <div class="dot"></div>
      </div>
      <div class="content" data-date="Dec. 9-15, 2024">
        <p>With Josiah Kratz, I presented our work at <a href="#">NeurIPS 2024</a> in Vancouver, Canada! (<a href="assets/ml4ps-poster-export.pdf">poster</a>)</p>
      </div>
    </li>
    <li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Nov. 3-10, 2024">
    <p>I presented our work on average-reward RL at <strong>MLQT</strong> ("Machine Learning for Quantum Technologies") in Erlangen, Germany! (<a href="/assets/mlqt-file.pdf" target="_blank">poster</a>) I was able to meet some leaders in the field of Quantum + ML, and saw a lot of exciting new ideas.</p>
  </div>
</li>
<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Oct. 30, 2024">
    <p>I was accepted for an internship at Sony AI for the summer of 2025! I will be working on deep RL with average-reward objectives for video games. Very excited!</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Oct. 25, 2024">
    <p>Reviewing papers for ICLR and AISTATS... 📄✍️</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Oct. 9, 2024">
    <p>The work with Josiah based on our meeting at IAIFI has been accepted as a <a href="https://arxiv.org/abs/2410.08439">workshop paper</a> in ML4PS @ NeurIPS 2024! "Reinforcement Learning for Optimal Control of Adaptive Cell Populations".</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Aug. 9-12, 2024">
    <p>I presented our <a href="https://rlj.cs.umass.edu/2024/papers/Paper345.html">work</a> at RLC 2024 in Amherst, MA. The invited talks were amazing! I learned a lot about the current state of the art in reinforcement learning and met many great people. (<a href="assets/rlc-talk.pdf">slides</a>, <a href="assets/rlc-poster.pdf">poster</a>)</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Aug. 5-16, 2024">
    <p>I have been accepted to attend the IAIFI Summer School and Summer Workshop. I worked on a project with Josiah Kratz based on reinforcement learning in biological control. (<a href="assets/IAIFI24_Hackathon.pdf">slides</a>)</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="June, 11 2024">
    <p>I am a reviewer for NeurIPS 2024 -- this is my first time as a conference reviewer! 📄✍️</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="May 10, 2024">
    <p><a href="https://rlj.cs.umass.edu/2024/papers/Paper345.html">Our paper</a> has been accepted for publication at the (inaugural) Reinforcement Learning Conference!</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="May 3, 2024">
    <p>I was nominated and inducted with lifetime membership to CSU's chapter of Sigma Pi Sigma.</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="May 2, 2024">
    <p>I was awarded the <a href="assets/gallery/award-umb2.jpg">Beacon Graduate Student Leadership Award</a>. Thank you to all of those who nominated me!</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Mar. 4-8, 2024">
    <p>I attended the annual <a href="https://meetings.aps.org/Meeting/MAR24/Session/S28.2">APS March Meeting</a> to share our work on deep average-reward RL algorithms developed from our work in <a href="https://journals.aps.org/prresearch/accepted/81076Yf5R561237418ac5b2093a5adf6f2ed1000c">PRR</a>. You can find the slides for that talk <a href="assets/APS24.pdf">here</a>.</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Mar. 1, 2024">
    <p>I was awarded the <a href="https://engage.aps.org/gds/honors/prizes-awards/impact-award">GDS IMPACT Award</a> for my work at the intersection of physics and reinforcement learning.</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Jan. 22, 2024 - May 6, 2024">
    <p>I've started a deep learning class, free for anyone to attend (pizza and drinks included!), with minimal prerequisites. See <a href="https://www.linkedin.com/posts/jacobhadamczyk_im-excited-to-announce-advertise-that-activity-7153832919436836865-FNhy?utm_source=share&utm_medium=member_desktop">here</a> and <a href="https://github.com/jacobha/deep-learning">here</a> for more details. I'm excited to share my enthusiasm about the deep learning (and particularly deep RL) revolution.</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Dec. 18, 2023">
    <p>Tharon Holdsworth and I presented a project for Akira Sone's quantum control course, where we study properties of the sech pulse and its use in quantum control. We will be releasing results on arXiv shortly, and code can be found <a href="https://github.com/jacobha/sech_pulse">here</a>.</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Sept. 6, 2023">
    <p>We updated the arXiv with a newer version of our work on double-sided bounds for the value function in reinforcement learning: <a href="https://arxiv.org/abs/2302.09676">arxiv link</a>.</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Aug. 7-18, 2023">
    <p>I attended the IAIFI <a href="https://iaifi.org/phd-summer-school.html">Summer School</a> and <a href="https://iaifi.org/summer-workshop.html">Summer Workshop</a>. I had an amazing time! I met and learned from many brilliant people working at the intersection of fundamental physics and AI - in both theoretical and experimental settings.</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="July 31 - Aug. 4, 2023">
    <p>I presented our work on compositionality in reinforcement learning at the <a href="https://proceedings.mlr.press/v216/adamczyk23a.html">2023 Conference on Uncertainty in Artificial Intelligence (UAI)</a> (<a href="assets/536_adamczyk.pdf">poster</a>). My co-author, Argenis Arriojas, received a Poster Spotlight award for our other work: <a href="https://proceedings.mlr.press/v216/arriojas23a.html">"Bayesian Inference Approach for Entropy Regularized Reinforcement Learning with Stochastic Dynamics"</a>.</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="July 25, 2023">
    <p>I have been awarded the College of Science and Mathematics (CSM) Dean's Doctoral Research Fellowship for Fall 2023. This fellowship will continue to support my research at the interface of physics and reinforcement learning. Thank you to CSM!</p>
  </div>
</li>
<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="May 12, 2023">
    <p>I presented my work at the <a href="https://www.umb.edu/news_events_media/events/seventh_annual_csm_student_success_showcase">7th Annual CSM Student Success Showcase</a>. See my poster <a href="assets/csm-poster-link.pdf">here</a> (pdf <a href="assets/csm-pdf-poster.pdf">here</a>).</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="May 11, 2023">
    <p>I presented my work and future research goals for reinforcement learning at the "Physics Department Retreat" at UMass Boston.</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="May 10, 2023">
    <p>Our paper titled "Entropy regularized reinforcement learning using large deviation theory" was accepted for publication in <a href="https://journals.aps.org/prresearch/accepted/81076Yf5R561237418ac5b2093a5adf6f2ed1000c">Physical Review Research</a>. (<a href="pending-post">A more detailed post is pending</a>.)</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="May 8, 2023">
    <p>Our papers (1) <a href="https://arxiv.org/abs/2303.02557">"Bounding the Optimal Value Function in Compositional Reinforcement Learning"</a> and (2) "Bayesian Inference Approach for Entropy Regularized Reinforcement Learning with Stochastic Dynamics" have both been accepted in UAI 2023.</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Mar. 30 - Apr. 27, 2023">
    <p>I taught a 5 week mini-course titled "Deep Learning and Physics" for all students and faculty at UMass Boston. I am planning to offer a similar, extended course in the future. <a href="assets/minicourse-flyer.pdf">See the flyer here</a></p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Mar. 13, 2023">
    <p>We have added two new papers to the arXiv: <a href="https://arxiv.org/abs/2303.02557">Bounding the Optimal Value Function in Compositional Reinforcement Learning</a> and <a href="https://arxiv.org/abs/2302.09676">Compositionality and Bounds for Optimal Value Functions in Reinforcement Learning</a> exploring the use of bounds on the Q-function in deep reinforcement learning. (<a href="pending-post">A more detailed post is pending</a>.)</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Mar. 5, 2023">
    <p>I attended the 2023 APS March Meeting in Las Vegas, NV. I presented a talk on my research in the statistical mechanics approach to reinforcement learning. (<a href="pending-post">A more detailed post is pending</a>.)</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Feb. 13, 2023">
    <p>I had a great time presenting at my first AI conference (AAAI-2023) in Washington, D.C. I met many great people and learned a lot about what the broader community is interested in. (<a href="/aaai-2023">Here is a more detailed post</a>.)</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Dec. 2, 2022">
    <p>I have been awarded a College of Science and Mathematics (CSM) Dean's Doctoral Research Fellowship for Spring 2023. This fellowship will support my research in the <a href="https://arxiv.org/abs/2106.03931">statistical mechanics approach to reinforcement learning</a>. I am very grateful to the CSM for this award, and I look forward to continuing my research in the coming year.</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Nov. 20, 2022">
    <p>Our group's first paper on entropy-regularized reinforcement learning titled <a href="https://arxiv.org/abs/2212.01174">"Utilizing Prior Solutions for Reward Shaping and Composition in Entropy-Regularized Reinforcement Learning"</a> was accepted at AAAI-2023.</p>
  </div>
</li>

<li>
  <div class="timeline-item">
    <div class="dot"></div>
  </div>
  <div class="content" data-date="Oct. 17, 2022">
    <p>I gave a talk for my PhD qualifying exam. I passed and was thus promoted to PhD candidacy. <a href="/assets/qualifying-exam-slides.pdf">Here are the slides</a>.
    </p>
  </div>
  <!-- add 2 line spaces -->

</li>
  <br>
  <br>

  
<style>
/* General Timeline Styling */
.timeline {
  width: 100%;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.timeline h2 {
  text-align: center;
  margin-bottom: 0px;
}

.timeline-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
}

.timeline-list li {
  display: flex;
  align-items: flex-start;
  position: relative;
  margin-bottom: 30px;
}

.timeline-list li::after {
  content: "";
  position: absolute;
  left: -10px;
  top: 0;
  width: 2px;
  height: calc(100% + 30px);
  background-color: #aaa;
  z-index: 1;
}

.dot {
  width: 15px;
  height: 15px;
  background-color: rgb(33, 44, 254);
  border-radius: 50%; /* Makes the dot circular */
  border: 2px solid #aaa;
  margin-top: 14.5px;
  position: relative;
  left: -16.5px; /* Aligns the dot with the timeline */
  top: 0%;
  z-index: 2;
}


/* General Timeline Styling */
.content {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px 15px 0px 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  flex-grow: 1;
  width: 100%;
  box-sizing: border-box;
  margin-left: 5px;
  margin-bottom: 2px;
  margin-top: 0px;
  position: relative;
  overflow: hidden; /* Prevents content overflow */
}
/* Add hover effect to grow box and reveal date at the bottom */
.content {
  position: relative;
  transition: all 0.5s ease; /* Smooth transition for scaling and box height */
}

.content:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
  padding-bottom: 20px; /* Adds space for the date */
}

.content::after {
  content: attr(data-date); /* Display the date */
  /* make it italics */
  font-style: italic;
  position: absolute;
  bottom: 10px; /* Position the date at the bottom */
  right: 10px; /* Align the date to the right */
  font-size: 0.8rem;
  color: #555;
  opacity: 0; /* Hidden by default */
  transition: opacity 0.3s ease; /* Smooth fade-in */
}

.content:hover::after {
  opacity: 1; /* Show the date on hover */
}


</style>
