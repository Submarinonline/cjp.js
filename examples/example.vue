<template>
    <div>
        <textarea
            placeholder="ここに入力"
            @input="result = translate($event.target.value)"
        ></textarea>
        <textarea
            placeholder="正レい日本语が出力されゑ！"
            v-model="result"
            readonly
        ></textarea>
    </div>
</template>

<script>
import { translate } from 'cjp'

export default {
    props: {
        result: String
    },
    methods: {
        translate
    }
}
</script>

<style>
textarea: {
    resize: none;
}
</style>
