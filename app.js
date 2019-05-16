Vue.component('card', {

    props: ['title', 'content'],
    
    data() {
        return {
            claps: 0
        }
    },

    template: `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">{{ title }}</h3>
                <div class="card-text">
                    {{ content }}
                </div>
                <div class="text-center text-muted display-4"> {{ claps }}</div>
                <button @click="clapForArticle" class="btn btn-info btn-sm">Clap for me</button>
                <button @click="deleteArticle" class="btn btn-danger btn-sm">Delete Me</button>
            </div>
        </div>
    `,
    methods: {
        deleteArticle() {
            this.$emit('delete-article', this.title)
        },

        clapForArticle() {
            this.claps++;
        }
    }

})


new Vue({
    el: '#app',
    data: {
        articels: [
            {
                title: 'Article 1',
                content: 'ini adalah artikel pertama. judulnya adalah artikel 1'
            },
            {
                title: 'Article 2',
                content: 'ini adalah artikel pertama. judulnya adalah artikel 2'
            },
            {
                title: 'Article 3',
                content: 'ini adalah artikel pertama. judulnya adalah artikel 3'
            },
            {
                title: 'Article 4',
                content: 'ini adalah artikel pertama. judulnya adalah artikel 4'
            }
        ]
    },

    methods: {
        removeArticle(event) {
            this.articels = this.articels.filter(article => article.title !== event)
        }
    }
})