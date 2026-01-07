export function middleware(context) {
  // 修改请求 header
  return context.next({
      headers: {
          'x-custom-header': 'middleware-added',
          'x-request-id': Math.random(),
      }
  });
}

export const config = {
  matcher: '/hello',
};
