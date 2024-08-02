# E-Commerce Serverless EDA: Web Store

The Web Store consists of:

- Next.js application
- Postgres database via Xata for transactional order management

The Web Store interacts with the following services synchronously:

- Inventory Service API to get products in inventory. Note that the application could perform data synchronization and remove the need for synchronous interactions between the Web Store and the Inventory Service

## Events

The Web Store publishes the following events to Hookdeck:

### `order:request`

```json
{
  "type": "order:request",
  "data": {
    "email": "phil@example.com",
    "full_name": "Phil Leggetter",
    "id": "rec_cqmckpgdc35bl9r019s0",
    "sku": "SKU-1",
    "status": "pending"
  }
}
```
