<template>
  <div class="grid gap-6 md:grid-cols-2 md:items-center">
    <div>
      <div class="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">
        <span class="anime-font text-neonPurple font-black">Neon</span>
        <span class="text-white/70 text-sm">anime-inspired fitness programs</span>
      </div>

      <h1 class="mt-5 text-4xl font-black text-white md:text-5xl">
        Train like a story.
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple via-cyan-500 to-neonOrange">Level up your body.</span>
      </h1>

      <p class="mt-4 max-w-prose text-white/70">
        Choose your original character archetype, follow structured workouts, and unlock XP, ranks, and missions.
      </p>

      <div class="mt-7 flex flex-wrap gap-3">
        <NeonButton label="Login" to="/login" />
        <NeonButton label="Sign up" to="/signup" />
        <NeonButton label="Select Character" to="/select-character" />
      </div>
    </div>

    <div class="relative">
      <div class="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-neonPurple/25 via-cyan-500/10 to-neonOrange/20 blur-xl" />
      <NeonCard>
        <div class="space-y-3">
          <div class="anime-font text-2xl font-black">How it works</div>
          <div class="text-sm text-white/70">
            1) Pick a character · 2) Complete a daily mission · 3) Earn XP and progress toward rank S.
          </div>

          <div class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div class="text-sm font-bold text-white">Gamified XP</div>
              <div class="mt-1 text-xs text-white/60">Rank D → S, achievements, weekly challenges.</div>
            </div>
            <div class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div class="text-sm font-bold text-white">Workout engine</div>
              <div class="mt-1 text-xs text-white/60">Timer + reps tracker with structured programs.</div>
            </div>
            <div class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div class="text-sm font-bold text-white">Progress charts</div>
              <div class="mt-1 text-xs text-white/60">Weight logs and completion stats.</div>
            </div>
            <div class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div class="text-sm font-bold text-white">Diet suggestions</div>
              <div class="mt-1 text-xs text-white/60">Calories + meal ideas based on goal.</div>
            </div>
          </div>
        </div>
      </NeonCard>
    </div>
  </div>
</template>

<script setup>
import NeonButton from '@/components/NeonButton.vue'
import NeonCard from '@/components/NeonCard.vue'
</script>

