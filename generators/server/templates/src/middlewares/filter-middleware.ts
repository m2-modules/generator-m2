export default function filterMiddleware(req: any, res: any, next: () => void) {
  console.log('Request filtered')
  next()
}
