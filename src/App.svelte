<script></script>
<style type="text/postcss" lang="postcss">
    #main{
        @apply flex justify-center items-center;
    }
    h1{
        @apply text-xl underline mr-2;
    }
    button{
        @apply rounded-xl px-2 py-1 bg-red-400 text-white elevation-2;
    }
    button:hover{
        @apply text-red-400 bg-white elevation-0 border-gray-400 border;
    }
</style>

<div id="main">
    <h1>Welcome</h1>
    <button>Contoh tombol</button>
</div>