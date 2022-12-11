---
layout: post
title: Closing the Gap
permalink: /rewardshaping-research/
categories: research_posts
exclude: true
---

tl;dr:
[Reward shaping][ng-shaping] holds in [entropy-regularized (a.k.a. MaxEnt) RL][maxent-misnomer]. Any* two RL tasks can be related by an auxiliary "corrective" task. 

*The two tasks must be in the same state and action space, with the same discount factor.

[Classical "reward shaping"][ng-shaping] is a technique for modifying an RL agent's reward function to improve its training time while keeping the optimal policy unchanged. We've found that the standard formulation of reward shaping carries over to the entropy-regularized (a.k.a MaxEnt) RL setting.

## The Story

## The Results

## The Details

## Future Work

[maxent-misnomer]: 
[ng-shaping]: https://people.eecs.berkeley.edu/~pabbeel/cs287-fa09/readings/NgHaradaRussell-shaping-ICML1999.pdf