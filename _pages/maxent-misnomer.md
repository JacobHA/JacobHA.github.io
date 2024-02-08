---
layout: post
title: MaxEnt Misnomer
permalink: /maxent-misnomer/
categories: research_posts
exclude: true
---

tl;dr:
The maximum entropy (MaxEnt) principle is a special case of the entropy-regularized RL setting when the prior policy is taken to be uniform.
Unfortunately, the term "MaxEnt" is often used to refer to the entropy-regularized RL setting in general, which can be misleading. Sometimes many "MaxEnt" results do in fact carry over to the more general setting (of an arbitrary prior policy), but care is needed to ensure that the results are not specific to the uniform prior policy. Switching the prior to a uniform one is always possible, but requires a corresponding change in the reward function which may cause issues depending on the problem at hand. I discussed this problem in [detail] in my [AAAI paper][aaai]. Upon attending the conference, I met [Matheus Centa] who was incidentally working on (and [published also at AAAI][matheus-aaai]!) a similar idea.

Perhaps "entropy-regularized" will get a nice nickname some day, but "EntReg" (entrails?) does not sound very appealing. Maybe "EntRized", "EntRe", ... 

[detail]: /_pages/rewardshaping-research.md
[aaai]: https://arxiv.org/abs/2212.01174
[matheus-aaai]: https://ojs.aaai.org/index.php/AAAI/article/view/25850