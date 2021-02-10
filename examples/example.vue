<template>
    <div>
        <textarea
            placeholder="ここに入力"
            @input="result = generate($event.target.value)"
        ></textarea>
        <textarea
            placeholder="正レい日本语が出力されゑ！"
            v-model="result"
            readonly
        ></textarea>
    </div>
</template>

<script>
import { generate } from 'cjp'

export default {
    props: {
        result: String
    },
    methods: {
        generate
    }
}
</script>

<style>
textarea: {
    resize: none;
}
</style>
