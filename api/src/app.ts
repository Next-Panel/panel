import { Elysia, MethodType, Router, RouterPlugin } from 'router'

const app = new Elysia().use(RouterPlugin)

const router = new Router({
  name: 'Homepage',
  description: 'Show hello world',
  path: '/',
  methods: [
    {
      type: MethodType.Get,
      run () {
        return ''
      },
    },
    {
      type: MethodType.Post,
      run () {
        return ''
      },
    }
  ] as const
})

console.log(router.methods[0].type)
  

app.get('/', ({ description }) => {
  console.log(description)
})

app.listen(3000)
