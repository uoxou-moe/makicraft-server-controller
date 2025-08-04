// このファイルはVercelのサーバーレス関数として実行されます

export default function handler(request, response) {
  const apiEndpoint = process.env.ENDPOINT;
  const instanceId = process.env.INSTANCE_ID;

  if (!apiEndpoint || !instanceId) {
    // 本番環境でエラーの原因が漏洩しないように、具体的なメッセージはサーバーログにのみ出力
    console.error("Required environment variables are not set.");
    return response.status(500).json({ error: 'Server configuration error.' });
  }

  response.status(200).json({
    apiEndpoint: apiEndpoint,
    instanceId: instanceId,
  });
}
