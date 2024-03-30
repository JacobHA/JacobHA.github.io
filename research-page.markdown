---
layout: page
title: My Research
permalink: /research/
---
## Current Research
Since joining UMass Boston in fall 2020, I have been working under the supervision of Dr. Rahul Kulkarni ([website][rahul-website]). With his guidance, I have learned about Markov Decision Processes (MDPs), large deviations theory (LDT), and reinforcement learning (RL). I have also been guided by Dr. Stas Tiomkin ([website][stas-website]) from San Jose State University. I have also worked alongside (recent PhD graduate from UMass Boston!) Dr. Argenis Arriojas ([github][argenis-git]) and Master's student Volodymyr Makarenko ([github][vlad-git]).

I am currently working on Reinforcement Learning (RL), specifically its applications and connections to physics.
I have studied different forms of RL (standard vs. maximum entropy; average reward vs. discounted) in my research and my current goal is to understand how RL can generally be made more efficient with insights from physics. For a recent (March 2022) talk at the APS March Meeting take a look [at this video][yt-link].

My research focuses on the following ideas:
- Using prior knowledge of primitive behaviors to quickly learn more complex behaviors.
    - Humans learn many disjoint tasks throughout their life, and are able to combine them at will. For instance, we can extend our empty hand; and we also can grasp a ball. With minimal effort, we combine these skills (temporally) by handing that ball to someone. We also know how to extend a closed fist, which can be thought of as a composition of these two abilities.
    - Another approach to solving new tasks is through "curriculum" learning, where a teacher designs a curriculum for the student (RL agent) to facilitate more efficient learning of complex tasks, by starting with simpler tasks. 
- Creating agents which are able to adapt to new contexts (new dynamics, new rewards).
    - Change in dynamics: Humans use prior knowledge to solve unseen tasks easily. When we get a new pair of socks (new texture, color) we can still put them on our feet immediately, without having to try to do so several times. This is called "zero-shot transfer" and is an important open problem in RL.
    - Change in rewards: Humans can also adapt to changes in the goal of certain problems. Suppose we know how to place a cup of coffee at a certain point on a table (say on a coaster). If the coaster must be moved, or is occupied, we can immediately place the cup elsewhere without additional learning.
- Devising new algorithms based on insights from non-equilibrium statistical mechanics.
    - Markov chains, a fundamental ingredient of reinforcement learning, are a frequently used tool in statistical mechanics. Our group is studying ways of combining statistical mechanics with the reinforcement learning problem to create novel algorithms which we hope will reduce the sample and time complexity of current algorithms.
    - One such algorithm is "u-chi" learning, based on the solution to an eigenvector equation. 
    - Other exciting new algorithms are in development!

See my approach to these problems in our papers [AAAI-23 paper][rewardshaping-research], [PRR paper][prr], [UAI-23 paper1][uai-vlad], [UAI-23 paper2][uai-arg]. You can watch my [talk on YouTube][aaai-yt-link] prepared for the AAAI-23 meeting in Washington, D.C.

## Past Research
- ["Cloud Computing"][clouds-link]
-- From fall 2019 to spring 2020 (my last year at CSU) I worked on a computational atmospheric model, used to study cloud formation and resulting weather patterns.

- [SQUIDs in Magnetic Fields][neel-link]
-- In summer of 2019, I visited the Neel Institute in France to work on superconductivity. 

- [Tunable Microgels][microgels-link]
-- During my time at Cleveland State University (fall 2017 - spring 2020), I worked on modeling and analyzing thermoresponsive microgels.

<!-- [neel-link]: /research-posts/2022/05/11/neel-research.html -->
<!-- [neel-link]: /_pages/neel-research.html/ -->
[neel-link]: /neel-research/
[microgels-link]: /microgels-research/
[rahul-website]: http://www.quantum.umb.edu/Kulkarni/Rahul_homepage.html
[stas-website]: https://cmpe.sjsu.edu/profile/stas-tiomkin
[argenis-git]: https://github.com/argearriojas
[clouds-link]: /clouds-research/
[yt-link]: https://www.youtube.com/watch?v=qWjA7VOOxE4&t
[aaai-yt-link]: https://www.youtube.com/watch?v=BwdHQFDzc8c
[rewardshaping-research]: /rewardshaping-research/
[prr]: https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.5.023085
[uai-vlad]: https://proceedings.mlr.press/v216/adamczyk23a.html
[uai-arg]: https://proceedings.mlr.press/v216/arriojas23a.html
