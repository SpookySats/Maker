
# Create self-signed certificate
See https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu-20-04-1
```
openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout /etc/ssl/private/spookyspace-nft-selfsigned.key -out /etc/ssl/certs/spookyspace-nft-selfsigned.crt
```

# Nginx config

- `/etc/nginx/sites-available/nft.spookyspace.com`

```

upstream spookyspaceapi {
    server 127.0.0.1:4101;
}

server {
    server_name nft.spookyspace.com;
    access_log /var/log/nginx/nft.spookyspace.com-access.log;
    error_log /var/log/nginx/nft.spookyspace.com-error.log;

    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;

        proxy_pass http://spookyspaceapi/;
        proxy_redirect off;

        # By default the timeout is only 60s making some long-running queries impossible
        proxy_read_timeout 300;
        proxy_connect_timeout 300;
        proxy_send_timeout 300;
    }
 
    listen 443 ssl;
    ssl_certificate /etc/ssl/certs/spookyspace-nft-selfsigned.crt;
    ssl_certificate_key /etc/ssl/private/spookyspace-nft-selfsigned.key;
    include /etc/nginx/snippets/ssl-params.conf;
}

server {
    if ($host = nft.spookyspace.com) {
        return 301 https://$host$request_uri;
    }

    listen 0.0.0.0:80;
    server_name nft.spookyspace.com;
    return 404;
}

```

- `ln -s /etc/nginx/sites-available/nft.spookyspace.com nft.spookyspace.com`