export const onRequestGet = async (context: any): Promise<Response> => {
  // 获取请求对象
  const { request } = context;
  
  // 打印所有请求 headers
  console.log('===== 请求 Headers =====');
  console.log('所有 headers:', Object.fromEntries(request.headers));
  
  // 验证中间件添加的 headers
  const customHeader = request.headers.get('x-custom-header');
  const requestId = request.headers.get('x-request-id');
  
  console.log('中间件添加的 x-custom-header:', customHeader);
  console.log('中间件添加的 x-request-id:', requestId);
  
  // 构建响应信息
  const responseData = {
    message: 'Hello, World!',
    middleware_headers: {
      'x-custom-header': customHeader,
      'x-request-id': requestId,
    },
    all_headers: Object.fromEntries(request.headers),
  };
  
  return new Response(JSON.stringify(responseData, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  });
};

