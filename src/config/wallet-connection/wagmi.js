import { createConfig, http } from "wagmi";
import { liskSepolia, sepolia } from "wagmi/chains";
import { walletConnect } from "wagmi/connectors";

export const supportedNetworks = [ liskSepolia, sepolia,];

export const config = createConfig({
    chains: supportedNetworks,
    multiInjectedProviderDiscovery: true, // default to true though
    connectors: [
        walletConnect({ projectId: import.meta.env.VITE_REOWN_PROJECT_ID }),
    ],
    transports: {
        [liskSepolia.id]: http(),
        [sepolia.id]: http(),
        
    },
});
