<template>
    <div class="big-link__container">
        <h2 class="d-inline-block mt-7 big-link portfolio-link"><router-link class="" :to="route">{{ title }}</router-link></h2>
    </div>
</template>

<script>
    export default {
        name: 'BigLink',
        props: [ 'title', 'route' ]
    }
</script>

<style lang="scss">
    .big-link {
        letter-spacing: 3px;
        font-weight: normal;
        position: relative;
    }

    .portfolio-link {
        position: relative;
        z-index: 8999;

        a {
            @include media-breakpoint-up(xl) {
                font-size: 4.5rem;
            }
        }

        &__surprise {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-image: url('https://media.giphy.com/media/ToMjGpM8Jfkwz7jPSI8/source.gif');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            opacity: 0;
            pointer-events: none;
            z-index: 8000;
            transition: all 0.15s ease-in-out;
        }

        &:hover {
            a {
                color: $white !important;
                letter-spacing: 7px;
            }

            & + div {
                opacity: 0.5 !important;
            }

            &::after,
            &::before {
                transform: translateX(0) translateY(10%);
                opacity: 1;
                color: $white;
            }
        }
    }
</style>