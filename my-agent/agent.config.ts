import { z, defineConfig } from '@botpress/runtime'

export default defineConfig({
    name: 'PF1',
    description: 'A RAG-powered knowledge assistant that answers questions using your documents',

    defaultModels: {
        autonomous: [
            'openai:gpt-5.4-2026-03-05',
            'anthropic:claude-opus-4-6',
        ],
        zai: 'openai:gpt-4.1-2025-04-14',
    },

    // Per-bot persistent state
    bot: {
        state: z.object({}),
    },

    // Per-user persistent state
    user: {
        state: z.object({}),
    },

    // Integrations extend your agent with actions, channels, and events.
    dependencies: {
        "integrations": {
            "chat": "chat@1.0.0",
            "webchat": "webchat@0.3.0",
            "email-notifier": "plus/email-notifier@1.1.1",
            "anthropic": "anthropic@18.0.1",
        }
    },
})
