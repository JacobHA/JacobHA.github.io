---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
title: Home
---
<link rel='shortcut icon' type='image/x-icon' href='assets/favicon.ico' />

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
    <p>Me at <a href="https://neel.cnrs.fr/en">Néel Institute</a>, tightening up the final heat shield for their <a href="https://en.wikipedia.org/wiki/Dilution_refrigerator">"sionludi"</a>, a dilution refrigerator capable of reaching temperatures down to 50mK! You can learn more about my research experience on the <a href= "https://neel.cnrs.fr/en/equipes-poles-et-services/nano-electronique-quantique-et-spectroscopie-qunes">QuNES team</a> at Néel <a href="/neel-research/">here.</a>
    </p>
  </div>
</div>


<br>
<div class="row-after">
The purpose of this website is to post updates, blogs, and tutorials on various topics related to physics, mathematics, and machine learning - as well as other topics that I find interesting.

I hope to use this website as a resource for explaining my research and some of my Github repositories.
</div>
<h2>Recent Announcements</h2>

- Dec. 2, 2022: I have been awarded a College of Science and Mathematics (CSM) Dean's Doctoral Research Fellowship for Spring 2023. This fellowship will support my research in the [statistical mechanics approach to reinforcement learning][arxiv-paper]. I am very grateful to the CSM for this award, and I look forward to continuing my research in the coming year.

- Nov. 20, 2022: Our group's first peer-reviewed paper on entropy-regularized reinforcement learning entitled "Utilizing Prior Solutions for Reward Shaping and Composition in Entropy-Regularized Reinforcement Learning" was accepted at AAAI-2023 ([LinkedIn][linkedin-link]). Here is the [ArXiv version][new-arxiv-paper].

- Oct. 17, 2022: I gave a [talk][slides-link] for my PhD qualifying exam. I passed and was thus promoted to PhD candidacy.

[linkedin-link]: https://www.linkedin.com/posts/jacob-adamczyk-182b8a1a4_composable-deep-reinforcement-learning-for-activity-7000170354451054592-B5X0?utm_source=share&utm_medium=member_desktop

[slides-link]: /assets/qualifying-exam-slides.pdf

[arxiv-paper]: https://arxiv.org/abs/2106.03931

[new-arxiv-paper]: https://arxiv.org/abs/2212.01174
