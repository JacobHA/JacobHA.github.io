---
layout: post
title: Closing the Gap
permalink: /rewardshaping-research/
categories: research_posts
exclude: true
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.css" integrity="sha384-yFRtMMDnQtDRO8rLpMIKrtPCD5jdktao2TV19YiZYWMDkUR5GQZR/NOVTdquEx1j" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.js" integrity="sha384-9Nhn55MVVN0/4OFx7EE5kpFBPsEMZxKTCnA+4fqDmg12eCTqGi6+BB2LjY8brQxJ" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/contrib/auto-render.min.js" integrity="sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>

tl;dr:

[Reward shaping][ng-shaping] holds in [entropy-regularized (a.k.a. MaxEnt) RL][maxent-misnomer]. Any* two RL tasks can be related by an auxiliary "corrective" task. Solving a composite task (a new reward function which is a function of previous tasks' rewards) can be done by applying that function to the optimal value functions ($$f(Q_1, Q_2, \dots)$$) and then learning to "close the gap" by learning the corrective task's value function.

*The two tasks must be in the same state and action space, with the same discount factor.

## The Story

[Classical "reward shaping"][ng-shaping] is a technique for modifying an RL agent's reward function to improve its training time while keeping the optimal policy unchanged. We've found that the standard formulation of reward shaping carries over to the entropy-regularized (a.k.a MaxEnt) RL setting.

After applying a composition function $$f$$ to a set of subtasks' rewards ($$\widetilde{r}(s,a)=f(r_1(s,a), r_2(s,a), \dots)$$), one may wonder if the corresponding optimal value function $$\widetilde{Q}(s,a)$$ can be found by applying $$f$$ to the optimal value functions of the subtasks ($$\widetilde{Q}(s,a)=f(Q_1(s,a), Q_2(s,a), \dots)$$). This is not generally the case (but see [this][geraud-paper], [this][niekerk-paper], and [this][todorov-paper] for examples where it is the case, with proper assumptions). Nevertheless, we can still find the optimal value function of the composite task by learning the optimal value function of a related "corrective task" (which we denote $$K$$.) This corrective value function generalizes the $$C^\infty$$ term introduced in [this paper][hunt-paper] to *any* transformation function (rather than just convex combinations) of rewards.

## The Results

- Published a conference paper in the Technical Track of [AAAI (2023)][paper-link].
- See a brief presentation on [YouTube][yt-link].

## The Details
🏗️ (Under construction)

## Future Work

Some generalizations and future work that I am interested in:
- Extend the results to the case where the corrective task is not in the same state and action space as the composite task.
- Extend the results to the case where tasks have different discount factors (as $$\gamma$$ is typically taken to be a hyperparameter during training).

[yt-link]: https://www.youtube.com/watch?v=BwdHQFDzc8c
[maxent-misnomer]: maxent-misnomer.md
[ng-shaping]: https://people.eecs.berkeley.edu/~pabbeel/cs287-fa09/readings/NgHaradaRussell-shaping-ICML1999.pdf
[paper-link]: https://arxiv.org/abs/2212.01174
[geraud-paper]: https://proceedings.neurips.cc/paper/2020/file/6ba3af5d7b2790e73f0de32e5c8c1798-Paper.pdf
[niekerk-paper]: http://proceedings.mlr.press/v97/van-niekerk19a/van-niekerk19a.pdf
[hunt-paper]: https://arxiv.org/abs/1812.02216
[todorov-paper]: https://homes.cs.washington.edu/~todorov/courses/amath579/reading/Compositionality.pdf
