---
layout: post
title: Closing the Gap
permalink: /rewardshaping-research/
categories: research_posts
exclude: true
---

tl;dr:
[Reward shaping][ng-shaping] holds in [entropy-regularized (a.k.a. MaxEnt) RL][maxent-misnomer]. Any* two RL tasks can be related by an auxiliary "corrective" task. Solving a composite task (a new reward function which is a function of previous tasks' rewards) can be done by applying that function to the optimal value functions ($f(Q_1, Q_2, \dots)$) and then learning to "close the gap" by learning the corrective task's value function.

*The two tasks must be in the same state and action space, with the same discount factor.

## The Story

[Classical "reward shaping"][ng-shaping] is a technique for modifying an RL agent's reward function to improve its training time while keeping the optimal policy unchanged. We've found that the standard formulation of reward shaping carries over to the entropy-regularized (a.k.a MaxEnt) RL setting.

After applying a composition function $f$ to a set of subtasks' rewards ($\widetilde{r}(s,a)=f(r_1(s,a), r_2(s,a), \dots)$), 

## The Results

## The Details

## Future Work

[maxent-misnomer]: maxent-misnomer.md
[ng-shaping]: https://people.eecs.berkeley.edu/~pabbeel/cs287-fa09/readings/NgHaradaRussell-shaping-ICML1999.pdf