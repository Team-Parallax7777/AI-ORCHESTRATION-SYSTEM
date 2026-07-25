"""Tavily search API integration module for web research data fetching."""
import sys
import os
from typing import Dict, Any
from tavily import AsyncTavilyClient

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from config import settings

async def search_tavily(query: str, max_results: int = 5) -> Dict[str, Any]:
    """Execute asynchronous web search queries via the Tavily API."""
    if not settings.TAVILY_API_KEY:
        raise ValueError("TAVILY_API_KEY is not set.")
    
    # Use the official async client
    client = AsyncTavilyClient(api_key=settings.TAVILY_API_KEY)
    
    # The SDK handles all the HTTP formatting, headers, and error handling
    response = await client.search(
        query=query,
        search_depth="basic",
        max_results=max_results,
    )
    
    return response
